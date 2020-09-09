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

  const KeyDownValidation = (e) => {
    if (filter.indexOf(e.keyCode) < 0) {
      e.preventDefault();
      return false;
    }
  };

  const KeyUpValidation = (e) => {
    const input = e.target.value;
    if (phone.length < 13) {
      setError(true);
    } else if (phone.length == 13) {
      setError(false);
    }
    console.log(phone);
    // const formatted = formatPhoneText(input.value);
    // const isError = validatePhone(formatted) || formatted.length === 0;
  };

  const ValidateForm = () => {};
  const finalizeOrder = (e) => {
    e.preventDefault();
  };

  const [phone, setPhone] = useState("+380");
  const [isError, setError] = useState(false);

  return (
    <>
      <h1 className="order-header">Добавити текст</h1>
      <div className="order-wrap">
        <div className="order-form-container">
          <form onSubmit={finalizeOrder}>
            <div className="form-input-container">
              <span>Контактний номер телефону</span>
              <span>
                <input
                  className="order-input"
                  type="text"
                  value={phone}
                  maxLength="13"
                  onChange={(event) => setPhone(event.target.value)}
                  onKeyDown={KeyDownValidation}
                  //   onKeyUp={KeyUpValidation} //formating
                  onBlur={KeyUpValidation}
                />
                <span className={!isError ? "error hidden" : "error"}>
                  error
                </span>
              </span>
            </div>
            <button type="submit">Підтвердити замовлення</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Phone;
