import React from "react";
import { useFormik } from "formik";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="registerContainer">
      <h1>Register</h1>
      <form className="registerContainer__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          name="name"
          placeholder=" User name"
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          name="password"
          placeholder=" Password"
        />
        <label htmlFor="repassword"></label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repassword}
          id="repassword"
          name="repassword"
          placeholder="Repeat password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
