import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { assignmentStructureInputs } from '../../utils/formStructure'
import FormBox from "../FormBox/FormBox";

const FormContainer = (props) => {
  const [result, setResult ] = useState({})
  const onSubmit = (obj) => {
    if (!obj.name || !obj.serviceName) {
      toast("Please check the required fields are valid");
      setResult({})
    } else {
      setResult({
        metadata: {
          name: obj.name,
          categories: obj.categories
        },
        spec: {
          serviceName: obj.serviceName,
          runtime: obj.runtime,
          permissions: obj.permissions,
          description: obj.description
        }
      })
    }
  }

  return (
    <div className="form card-container padd-30">
      <FormBox model={assignmentStructureInputs} onSubmit={(obj) => {onSubmit(obj)}} />
      <ToastContainer position="bottom-right" />
      { result && Object.keys(result).length > 0 &&(
        <div className="flex-100 layout-row layout-align-start-start">
          <pre>
            { JSON.stringify(result , undefined, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
