import React, {useState} from 'react';

const RadioBox = ({ name, initialValue, onChange, options, group }) => {
  const [value, setValue] = useState(initialValue || null);

  const handleRadioChange = (value) => {
    if (onChange) {
      setValue(value)
      onChange(value);
    }
  };

  return (
    <div
      key={`i_${name}`}
      className="flex-100 layout-row layout-wrap layout-align-start-center">
      <div className="flex-100 layout-row layout-align-start-center">
        { options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name={group}
                value={option.value}
                checked={value === option.value}
                onChange={(event) => {
                  handleRadioChange(option.value);
                }}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
);
};

export default RadioBox;
