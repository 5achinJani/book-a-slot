import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { navigateToIndex } from "app/navigation";
import { renderTextField } from "components/form/renderField";
import { Form, FormGroup, Label, Col, Button } from "reactstrap";

const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "Required";
  }
  if (!values.lname) {
    errors.lname = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  return errors;
};

class SlotForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    const { isLoading } = this.props.slot;
    const { onCancel } = this.props.actions;
    return (
      <Fragment>
        <Form className="mt-3" onSubmit={handleSubmit}>
          <fieldset disabled={submitting || isLoading}>
            <FormGroup>
              <Label for="fname">First Name</Label>
              <Col>
                <Field
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  label="fname"
                  component={renderTextField}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="lname">Last Name</Label>
              <Col>
                <Field
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  label="lname"
                  component={renderTextField}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Col>
                <Field
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  label="phone"
                  component={renderTextField}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Button type="submit" disabled={submitting} color="success">
                  Book {submitting && <i className="fa fa-spinner fa-spin" />}
                </Button>
                <Button
                  onClick={onCancel}
                  disabled={submitting}
                  color="secondary"
                  className="ml-2"
                >
                  Cancel
                </Button>
              </Col>
            </FormGroup>
          </fieldset>
        </Form>
      </Fragment>
    );
  }
}

SlotForm = reduxForm({
  form: "slotForm",
  validate,
  enableReinitialize: true
})(SlotForm);

const mapStateToProps = state => {
  return {
    slot: state.slot,
    initialValues: state.slot.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        onCancel: navigateToIndex
      },
      dispatch
    )
  };
};

SlotForm = connect(mapStateToProps, mapDispatchToProps)(SlotForm);

export default SlotForm;
