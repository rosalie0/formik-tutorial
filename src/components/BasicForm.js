import { useFormik } from "formik";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(formik);

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
      />

      <label htmlFor="age">Age</label>
      <input
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="age"
        type="number"
        placeholder="Enter your age"
      />

      <label htmlFor="password">Password</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
      />

      <label htmlFor="password">Confirm Password</label>
      <input
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
      />

      <button type="submit">submit</button>
    </form>
  );
};
export default BasicForm;
