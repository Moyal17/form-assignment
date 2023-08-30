import React, { useState } from 'react';
const MultipleCheckboxes = ({ options, initialValues, onChange, isRequired }) => {
  const [checkedValues, setCheckedValues] = useState(initialValues);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    let updatedCheckedValues;

    if (event.target.checked) {
      updatedCheckedValues = [...checkedValues, value];
    } else {
      updatedCheckedValues = checkedValues.filter((item) => item !== value);
    }
    if (isRequired && updatedCheckedValues.length === 0) return;
    setCheckedValues(updatedCheckedValues);
    onChange(updatedCheckedValues)
  };

  return (
    <div className="flex-100 layout-row layout-wrap layout-align-start-start">
      {options.map((option, index) => (
        <div key={index} className="flex-100 layout-row layout-wrap layout-align-start-start margin-bottom-10px">
          <label className="flex-initial layout-row layout-align-start-center">
            <input
              type="checkbox"
              value={option.value}
              checked={checkedValues.includes(option.value)}
              onChange={handleCheckboxChange}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleCheckboxes;
