import { useFormik } from "formik";
import { basicSchema } from "../schemas/index";

const onSubmit = () => {
  // submitted!
};
const BasicForm = () => {
  // Destructure what we want out of useFormik so we don't have to do
  // formik.thingIWant every time.
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      // These are like the useStates for the inputs
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      // Give it the schema we made to check validation of each value
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        // If there is an error for email field,
        // give it the error class so styles can be applied.
        // Also only apply if they've "touched" this field
        className={errors.email && touched.email ? "input-error" : ""}
      />

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age && touched.age ? "input-error" : ""}
      />

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : ""}
      />

      <label htmlFor="password">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />

      <button type="submit">submit</button>
    </form>
  );
};
export default BasicForm;
