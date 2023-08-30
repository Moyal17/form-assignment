import React, {useState} from 'react';

const Checkbox = ({ name, checked, onChange, label, validation , text}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = (event) => {
    if (onChange) {
      setIsChecked((isChecked) => !isChecked)
      onChange(event.target.checked);
    }
  };

  return (
    <div
      key={`i_${name}`}
      className="flex-100 layout-row layout-wrap layout-align-start-center">
      <div className="flex-100 layout-row layout-align-start-center">
        <input
          type="checkbox"
          checked={isChecked}
          {...validation}
          onChange={(event) => {
            handleCheckboxChange(event);
          }}
        />
        <p className="margin-0">{text}</p>
      </div>
    </div>
  );
};

export default Checkbox;
