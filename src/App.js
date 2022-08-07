// import "./styles.css";
import Data from "./data.js";
import { useState } from "react";
import "./styles.css";
import styled from "styled-components";

export default function App() {
  function UserInput() {
    const input = confirm("Do you really want to clear all the records?");
    if (input) {
      setData([]);
    }
  }

  function resetData() {
    const input = confirm(`We Found ${Data.length} values, Click OK to reset`);
    if (input) {
      setData(Data);
    }
  }

  const [data, setData] = useState(Data);

  return (
    <div className="App">
      <div className="Wrapper">
        <h1 className="totalNumber">Total {data.length} Birthday's Today</h1>
        {data.map((Value) => {
          const { id, name, age, img } = Value;
          return (
            <div className="MainSection">
              <section key={id}>
                <img src={img} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>{age}</p>
                </div>
              </section>
            </div>
          );
        })}
        <div className="buttonSection">
          <button onClick={UserInput} className="button1">
            Clear All
          </button>
          <button onClick={resetData} className="button2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
