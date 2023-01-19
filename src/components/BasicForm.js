import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const BasicForm = () => {
  // Destructure what we want out of useFormik so we don't have to do
  // formik.thingIWant every time.
  const { values, handleBlur, handleChange } = useFormik({
    // These are like the useStates for the inputs
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    // Give it the schema we made to check validation of each value
    validationSchema: basicSchema,
  });

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
      />

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
      />

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />

      <label htmlFor="password">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
      />

      <button type="submit">submit</button>
    </form>
  );
};
export default BasicForm;
