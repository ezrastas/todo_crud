import React from "react";

export default function Radio(props) {
  const options = props.options;
  const value = props.value;
  const onChange = props.onChange;
  return (
    <div>
      {options.map(item => {
        console.log(item.onChange, onChange, item);
        return (
          <label key={item.value}>
            <input
              type="radio"
              value={item.value}
              checked={item.value === value}
              onChange={e => onChange(e.target.value)}
            />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
}
