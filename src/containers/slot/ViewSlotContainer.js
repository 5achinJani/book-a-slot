import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { onGetSlot, onBookSlot } from "reducers/slot";
import SlotHeading from "components/slot/SlotHeading";
import SlotForm from "containers/slot/SlotForm";
import { Col, Row } from "reactstrap";
class ViewSlotContainer extends Component {
  componentDidMount() {
    const { slotId: id } = this.props;
    this.props.actions.onGetSlot({ id });
  }
  onSubmit = values => {
    const { slotId } = this.props;
    console.log(values);
    return this.props.actions.onBookSlot({ slotId, user: values });
  };
  render() {
    return (
      <Fragment>
        <Row>
          <SlotHeading slot={this.props.slot} />
        </Row>
        <Row>
          <Col md={5}>
            <SlotForm onSubmit={this.onSubmit} />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    slot: state.slot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ onGetSlot, onBookSlot }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSlotContainer);
