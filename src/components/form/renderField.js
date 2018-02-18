import React, { Fragment } from "react";
import { Input, FormFeedback, FormText } from "reactstrap";

export const renderTextField = ({
  input,
  meta: { touched, error, warning },
  ...custom
}) => (
  <Fragment>
    <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
    {error && <FormFeedback>{error}</FormFeedback>}
    {!error && warning && <FormText>{warning}</FormText>}
  </Fragment>
);

export const renderRadioField = ({ value, input, ...custom }) => (
  <Input type="radio" checked={value === input.value} {...input} {...custom} />
);

export const renderCheckbox = ({ input: { value, onChange } }) => (
  <Input type="checkbox" checked={!!value} onChange={onChange} />
);

export const renderSelectField = ({
  input,
  meta: { touched, error, warning },
  children,
  ...custom
}) => (
  <Fragment>
    <Input
      type="select"
      {...(touched ? { valid: !error } : {})}
      {...input}
      {...custom}
    >
      {children}
    </Input>
    {error && <FormFeedback>{error}</FormFeedback>}
    {!error && warning && <FormText>{warning}</FormText>}
  </Fragment>
);

export const renderField = props => {
  // switch
  switch (props.type) {
    case "text":
      break;

    default:
      break;
  }
};
