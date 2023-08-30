import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import './ValidTextBox.css';

const ValidTextBox = ({ validations, onChange, isRequired }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const allValid = validations.every((rule) => new RegExp(rule.pattern).test(inputValue));
    setIsValid(allValid);
  }, [inputValue, validations]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
    const allValid = validations.every((rule) => new RegExp(rule.pattern).test(e.target.value));
    if (allValid) onChange(e.target.value);
    else onChange(null);
  }

  return (
    <div className="flex-100 layout-row layout-wrap layout-align-start-start">
      <div className="validating-textbox">
      <input
        type="text"
        value={inputValue}
        required={isRequired}
        onChange={(e) => onChangeInput(e)}
      />
      <div className="icon" onClick={() => setOpenDropdown(!openDropdown)}>
        {isValid ? <AiOutlineCheck size={20} color="green"/> : <AiOutlineClose size={20} color="#b41414"/>}
      </div>

      {openDropdown && (
        <div className="dropdown">
          {validations.map((rule, index) => {
            const pass = new RegExp(rule.pattern).test(inputValue);
            return (
              <div key={index} className="padd-5">
                {pass ? <AiOutlineCheck size={20} color="green"/> : <AiOutlineClose size={20} color="#b41414"/> } {rule.label}
              </div>
            );
          })}
        </div>
      )}
      </div>
        <div className="flex-100 layout-row layout-wrap layout-align-start-start margin-5">
          {!isValid && inputValue !== '' && (
            <p className="font12 margin-0 red-color">Input is invalid - please follow the regex patterns</p>
          )}
        </div>
    </div>
  );
};

export default ValidTextBox;
