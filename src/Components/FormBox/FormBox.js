/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import InputComponent from '../FormComponents/InputComponent';
import CheckBox from '../FormComponents/CheckBoxComponent';
import RadioBox from '../FormComponents/RadioComponent';
import ValidTextBox from '../ValidTextBox/ValidTextBox';
import MultipleCheckboxes from '../MultipleCheckboxes/MultipleCheckboxes';

const FormBox = ({ model, onSubmit }) => {
  const inputKeys = [];
  const inputInitialValues = {};
  const [inputs, setInputs] = useState({});

  const handleChange = (value, key) => {
    setInputs({...inputs, [key]: value})
  }

  const submitForm = (event) => {
    event.preventDefault();
    if (onSubmit) {
      const obj = {};
      inputKeys.forEach((key) => {
        // if the input hasChanged - it has a value
        if (inputs[key]) {
          obj[key] = inputs[key];
        }
        // if the input has not changed - but has an init value
        if (!inputs[key] && inputInitialValues[key]) {
          obj[key] = inputInitialValues[key] || null;
        }
      });
      if (Object.keys(obj).length > 0) {
        onSubmit(obj);
      }
    }
  }

  const renderInput = (prop, key) => {
    const elementType = prop.elementType || 'input';
    const config = prop.config || null;
    const validation = prop.validation || null;
    inputInitialValues[key] = prop.initValue || null;
    const placeholder = prop.placeholder || prop.label || prop.name;
    switch (elementType) {
      case 'input':
        return (
          <InputComponent
            name={key}
            type={prop.type || 'text'}
            value={prop.initValue || null}
            onChange={(newValue) => handleChange(newValue, key)}
            placeholder={placeholder}
            config={config}
            validation={validation}
          />
        );
      case 'textarea':
        return (
          <textarea
            id={key}
            {...config}
            {...validation}
            placeholder={placeholder}
            defaultValue={prop.initValue}
            key={`i_${key}`}
            onChange={(event) => { handleChange(event.target.value, key);}}
            className="input"
          />
        );
      case 'select':
        return (
          <CustomSelect
            options={prop.options}
            selectedValue={prop.initValue}
            onChange={(value) => handleChange(value, key)}
          />
        );
      case 'checkBox':
        return (
          <CheckBox
            name={key}
            validation={validation}
            checked={prop.initValue}
            onChange={(value) => handleChange(value, key)}
            text={prop.text}
          />
        );
      case 'multiCheckbox':
        return (
          <MultipleCheckboxes
            options={prop.options}
            isRequired={prop.isRequired}
            initialValues={prop.initValue || []}
            onChange={(values) => handleChange(values, key)}
          />
        );
      case 'validTextBox':
        return (
          <ValidTextBox
            validations={validation}
            isRequired={prop.isRequired}
            initialValue={prop.initValue}
            onChange={(values) => handleChange(values, key)}
          />
        );
      case 'radio':
        return (
          <RadioBox
            name={key}
            group={prop.group}
            options={prop.options}
            validation={validation}
            initialValue={prop.initValue}
            onChange={(value) => handleChange(value, key)}
          />
        );
      default:
        return (<div className="flex-100 layout-row layout-wrap layout-align-start-start" />);
    }
  }

  const renderInputContainer = () => {
    return [...model].map((prop) => {
      const key = prop.name;
      if (inputKeys.indexOf(prop.name) === -1) {
        inputKeys.push(prop.name);
      }
      return (
        <div key={key} id={`${prop.name}_id`} className={`layout-row layout-wrap layout-align-start-start ${prop.classes}`}>
          { prop.label && (
            <label className="flex-100 margin-bottom-10px" htmlFor={key}>{prop.label || key}
              {prop.isRequired && <span className="font12 red-color">*</span>}
            </label>
          )}
          <div className="flex-100 layout-row layout-align-start-start">
            { renderInput(prop, key)}
          </div>
        </div>
      );
    });
  }

  return (
    <form
      name="boxForm"
      onSubmit={(event) => submitForm(event)}
      className="flex-100 layout-row layout-wrap layout-align-start-start">
      <div className="flex-100 layout-row layout-wrap layout-align-start-start">
        {renderInputContainer()}
      </div>
      <div className="flex-100 layout-row layout-wrap layout-align-center-center padd-10">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );

}

export default FormBox;