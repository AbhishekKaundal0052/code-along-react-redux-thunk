import React from "react";
import axios from "axios";
import { useState } from "react";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import reducer from "./Redux/Reducer";
import { showError } from "./Redux/Actions";
import { showUser } from "./Redux/Actions";
import { thunk } from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));

function fetchData() {
  return function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        store.dispatch(showUser(users));
      })
      .catch((error) => store.dispatch(showError(error.message)));
  };
}

export default function Display() {
  const [data, setData] = useState([]);
  const [flag , setFlag] = useState(true);
  store.subscribe(() => setData(store.getState().user));
  function handleClick(){
    if(flag){
      store.dispatch(fetchData())
      setFlag(false)
    }
    else{
      setFlag(true)
      setData([])
    }
  }
  return (
    <div>
      <button onClick={() => handleClick()}>Display Data</button>
      {data.map((person) => {
        return (
          <div key={person.id} className="container">
            <h2 className="name">{person.name}</h2>
            <p>{person.email}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
