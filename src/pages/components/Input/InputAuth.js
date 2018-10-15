import React from "react";

export default props => (
  <div className="form-group">
    <div className="col-xs-12">
      <input {...props.input}
        className="form-control"
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  </div>
);
