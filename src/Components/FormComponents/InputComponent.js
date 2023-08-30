import React, {useState} from 'react';

const Input = ({ name, type, defaultValue, onChange, placeholder, config, validation }) => {
  const [value, setValue] = useState(defaultValue || null);
  const handleInputChange = (event) => {
    if (onChange) {
      setValue()
      onChange(event.target.value);
    }
  };

  return (
    <input
      id={name}
      {...config}
      {...validation}
      placeholder={placeholder}
      defaultValue={value}
      type={type}
      key={`i_${name}`}
      onChange={(event) => {
        handleInputChange(event);
      }}
      className="input"
    />
  );
};

export default Input;