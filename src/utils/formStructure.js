import {validationsArray, validationsFunctionName, validationsServiceName} from "./validationArrays";

export const testInputs = [
  {
    name: 'firstName',
    label: 'firstName',
    type: 'text',
    elementType: 'input',
    validation: {
      required: true,
      minLength: 2,
    },
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'lastName',
    label: 'lastName',
    type: 'text',
    elementType: 'input',
    validation: {
      required: true,
      minLength: 2,
    },
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'about',
    label: 'About Me',
    elementType: 'textarea',
    config: {
      rows: 3,
    },
    validation: {
      minLength: 3,
      maxLength: 500,
    },
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'isShowAgreeCheckBox',
    elementType: 'checkBox',
    clickText: true,
    text: 'Checkbox To Confirm Agreement',
    isSelected: true,
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'Radio Buttons ',
    group: 'radioGroup',
    elementType: 'radio',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
    initValue: 'banana',
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'select',
    label: 'Select',
    elementType: 'select',
    options: [
      { label: 'Oranges & Bananas', value: 'fruits' },
      { label: 'Corn, Oat, & Wheat', value: 'grains' },
      { label: 'Lentils, Peas, Beans, & Soy', value: 'legumes' },
    ],
    validation: {
      required: true,
      minLength: 2,
    },
    initValue: 'grains',
    classes: 'flex-50 margin-bottom-10px layout-align-start-start',
  },
  {
    name: 'multiCheckBoxSelect',
    label: 'Multi Check Box',
    elementType: 'multiCheckbox',
    options:  [
      { label: 'United States (US)', value: 'usa' },
      { label: 'United Kingdom (UK)', value: 'uk' },
      { label: 'Central African Republic (CAR)', value: 'car' },
      { label: 'United Arab Emirates (UAE)', value: 'uae' },
    ],
    initValue: ['uk', 'car'],
    classes: 'flex-100 margin-bottom-10px layout-align-start-start',
  },
  {
    name: 'validTextBox',
    label: 'Valid Text Box',
    elementType: 'validTextBox',
    validation: validationsArray,
    classes: 'flex-100 margin-bottom-10px',
  },
];


export const assignmentStructureInputs = [
  {
    name: 'name',
    label: 'Function Name',
    elementType: 'validTextBox',
    validation: validationsFunctionName,
    classes: 'flex-100 margin-bottom-10px',
    isRequired: true
  },
  {
    name: 'description',
    label: 'Description',
    elementType: 'textarea',
    config: {
      rows: 3,
    },
    validation: {
      minLength: 2,
      maxLength: 500,
    },
    classes: 'flex-100 margin-bottom-10px',
  },
  {
    name: 'runtime',
    label: 'Runtime',
    elementType: 'select',
    options: [
      { label: 'Go', value: 'golang' },
      { label: 'Java', value: 'java' },
      { label: 'NodeJs', value: 'nodejs' },
      { label: 'Python 3.7', value: 'python:3.7' },
      { label: 'Python 3.9', value: 'python:3.9' },
    ],
    initValue: 'python:3.9',
    classes: 'flex-100 margin-bottom-10px layout-align-start-start',
  },
  {
    name: 'categories',
    label: 'Categories',
    elementType: 'multiCheckbox',
    options:  [
      { label: 'Data Processing', value: 'process' },
      { label: 'Analytics & Reporting', value: 'report' },
      { label: 'Sorting, filtering, tagging', value: 'sort' },
    ],
    // initValue: ['report', 'sort'],
    classes: 'flex-100 margin-bottom-10px layout-align-start-start',
  },
  {
    name: 'serviceName',
    label: 'Service Name',
    elementType: 'validTextBox',
    validation: validationsServiceName,
    classes: 'flex-100 margin-bottom-10px',
    isRequired: true
  },
  {
    name: 'permissions',
    label: 'Permissions',
    elementType: 'multiCheckbox',
    options:  [
      { label: 'Read files', value: 'read' },
      { label: 'Write files', value: 'write' },
      { label: 'Execute files', value: 'execute' },
    ],
    initValue: ['read'],
    isRequired: true,
    classes: 'flex-100 margin-bottom-10px layout-align-start-start',
  },
]