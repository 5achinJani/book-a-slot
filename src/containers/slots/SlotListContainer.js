import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { onGetSlots } from "reducers/slots";
import SlotList from "components/slots/SlotList";
class SlotListContainer extends Component {
  componentDidMount() {
    this.props.actions.onGetSlots();
  }
  render() {
    return (
      <Fragment>
        <SlotList slots={this.props.slots} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    slots: state.slots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ onGetSlots }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlotListContainer);
