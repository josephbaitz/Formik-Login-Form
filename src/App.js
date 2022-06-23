import { useFormik } from "formik";
import React from "react";
// TODO: import useFormik from formik library
// Already done? Little confusing. Should probably delete this comment^^^
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },

    onSubmit: values => {
      alert("Login Successful");
    },

    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
      }
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
          <div>Email</div>
          <input type="text" name="emailField" id="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}

          <div>Password</div>
          <input type="text" name="pswField" id="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}

        <button type="submit" id="submitBtn">Submit</button>
      </form>  
    </div>
  );
}

export default App;
