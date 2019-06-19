import React from "react";

export const InputField = props => {
  let { label, error, name, maxLength, ...rest } = props;
  let [invalid, setInvalid] = React.useState(false);
  let [length, setLength] = React.useState(0);

  return (
    <div>
      <label for={name}>{label}</label>
      {"  "}
      <input className ="form-control"
        {...rest}
        name={name}
        onChange={e => {
          setLength(e.target.value.length);
          setInvalid(false);
        }}
        onInvalid={e => {
          e.preventDefault();
          setInvalid(true);
        }}
      />
      {maxLength ? <p>{length + "/" + maxLength}</p> : ""}
      {invalid ? <p style={{ color: "red" }}>{error}</p> : ""}
    </div>
  );
};
