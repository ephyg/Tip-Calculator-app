import { useState } from "react";
import "./App.scss";
import Dolar from "./assets/icon-dollar.svg";
import User from "./assets/icon-person.svg";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="header-text">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="card-container">
        <div className="left-container">
          <div className="input-container">
            <label htmlFor="bill">Bill</label>
            <InputField icon={Dolar} />
          </div>
          <div className="tip-selection-container">
            <h3>Select Tip %</h3>
            <div className="tip-percent-container">
              <Button value={"5 %"} />
              <Button value={"10 %"} />
              <Button value={"15 %"} />
              <Button value={"25 %"} />
              <Button value={"50 %"} />
              <input type="number" placeholder="Custom" className="" />
            </div>
          </div>
          <div className="people-num-container">
            <div className="label-container">
              <label htmlFor="peoples-num">Number of People</label>
              <label className="error-message" htmlFor="">
                Can't be zero
              </label>
            </div>
            <InputField icon={User} />
          </div>
        </div>
        <div className="right-container">
          <div className="amount-and-total">
            <div className="tip-amount-container">
              <div className="label-container">
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <span>$0.00</span>
            </div>
            <div className="total-container">
              <div className="label-container">
                <h2>Total</h2>
                <p>/ Person</p>
              </div>
              <span>$0.00</span>
            </div>
          </div>
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
