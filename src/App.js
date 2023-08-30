import React from 'react';
import FormContainer from './Components/FormContainer/FormContainer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div className="flex-100 layout-row layout-wrap layout-align-start-start padd15">
        <div className="flex-100 layout-row layout-wrap layout-align-center padd15 text-center">
          <h1 className="flex-100 layout-row layout-align-center">Form Page</h1>
        </div>
        <div className="flex-100 layout-row layout-wrap layout-align-center padd15">
        <FormContainer />
        </div>
      </div>
    </div>
  );
}

export default App;