import React, { useState } from 'react';
import './CustomSelect.css';
import {AiOutlineCheck} from "react-icons/ai";
import {GoTriangleDown} from "react-icons/go";

const CustomSelect = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelectedValue] = useState(selectedValue || options[0].value );
  const selectedOption = options.find(option => option.value === selected);

  return (
    <div className="custom-select">
      <div className="flex-100 layout-row layout-wrap layout-align-space-between-center selected-option" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <span className="arrow-icon"><GoTriangleDown size={20}/></span>
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className="option flex-100 layout-row layout-wrap layout-align-space-between-center"
              onClick={() => {
                setIsOpen(false);
                setSelectedValue(option.value);
                onChange(option.value);
              }} >
              <span>{option.label}</span>
              {option.value === selected && <span className="check-icon"><AiOutlineCheck size={20}/></span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;