import React, { useState } from "react";
import "./Phone.css";

const Phone = () => {
  const filter = [];
  const keypadZero = 48;
  const numpadZero = 96;

  for (let i = 0; i <= 9; i++) {
    filter.push(i + keypadZero);
    filter.push(i + numpadZero);
  }

  filter.push(8); //backspace
  filter.push(9); //tab
  filter.push(46); //delete
  filter.push(37); //left arrow
  filter.push(39); //right arrow
  filter.push(116); //f5
  filter.push(123); //f12

  const KeyDownValidation = (e) => {
    if (filter.indexOf(e.keyCode) < 0) {
      e.preventDefault();
      return false;
    }
  };

  const BlurValidation = (e) => {
    const input = e.target.value.toString();
    const regex = /\D/;
    const regInput = regex.test(input);
    if (phone.length < 9) {
      setError(true);
    } else if (regInput === true) {
      setError(true);
    } else if (phone.length === 9) {
      setError(false);
    }
  };

  const finalizeOrder = (e) => {
    e.preventDefault();
  };

  const [phone, setPhone] = useState("");
  const [isError, setError] = useState(false);

  return (
    <>
      <h1 className="order-header">Simple phone validation with React Hooks</h1>
      <div className="order-wrap">
        <form onSubmit={finalizeOrder}>
          <div className="form-input-container">
            <div className="input-wrap-w-prefix">
              <input
                type="text"
                value="+380"
                disabled
                className="phone-prefix"
              ></input>
              <div className="input-wrap">
                <input
                  className={
                    isError ? "order-input  error-outline" : "order-input"
                  }
                  type="text"
                  value={phone}
                  maxLength="9"
                  onChange={(event) => setPhone(event.target.value)}
                  onKeyDown={KeyDownValidation}
                  onBlur={BlurValidation}
                />
                <span className={isError ? "error" : "error hidden"}>
                  please check the number
                </span>
              </div>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
};

export default Phone;
