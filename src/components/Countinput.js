import React from 'react';

export function Countinput() {

  let { label, error, name, maxLength, ...rest } = props;
  let [invalid, setInvalid] = React.useState(false);
  let [length, setLength] = React.useState(0);

    return (
      <div className = "Inputcount">
        <form  action="javascript:void(0)"
      onChange={e => {
        console.info("PARAMS", { [e.target.name]: e.target.value });
      }}
      onSubmit={() => {
        alert("Form submitted");
      }}>
          <input
            type="text"
            class="form-control"
            placeholder="Type here...."
            id="demo"
            name="email"
            maxlength="50"
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
         
        </form>
        {maxLength ? <p>{length + "/" + maxLength}</p> : ""}
      {invalid ? <p style={{ color: "red" }}>{error}</p> : ""}
        </div>
    );
}
