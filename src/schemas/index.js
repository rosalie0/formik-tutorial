import * as yup from "yup";

// A regex expression we can use to define what is a valid password:
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// schema for the basic form
// Our schema is an object that has a shape like...
export const basicSchema = yup.object().shape({
  // ABOUT WHITE SPACES:
  // .required() is smart enough to treat an entry that is all whitespaces to count as ''

  // email is a string, that is an email, that is required
  // the string you pass in as the argument is what you want the error message to look like
  email: yup.string().email("please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup.string().required("Required").min(5).matches(passwordRules, {
    // if the password doesn't match passwordRules, error message is:
    message:
      "Password must have be 5 characters long, and include atleast 1 upper case letter, 1 lower case letter, and 1 numeric digit.",
  }),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
