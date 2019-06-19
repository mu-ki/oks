import React from "react";
import { InputField } from "./Inputfield";

export const Form = () => {
  return (
    <form
      action="javascript:void(0)"
      onSubmit={() => {
        alert("Form submitted");
      }}
    >
      <InputField
        label="Username"
        placeholder="user@mail.com"
        error="Please enter mail"
        type="email"
        maxLength="50"
        required
      />
      <InputField
        label="Password"
        placeholder="p@ssword"
        error="invalid password"
        type="password"
        required
      />
      <input type="submit" />
    </form>
  );
};
