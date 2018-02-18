import React, { Fragment } from "react";
import { Col } from "reactstrap";
import { IinitialState as ISlotState } from "reducers/slot";

type IProps = {
  slot: ISlotState
};
const SlotHeading = (props: IProps) => {
  const { slot, isLoading } = props.slot;
  return (
    <Fragment>
      <Col>
        {isLoading ? (
          <div>
            Loading slot.. <i className="fa fa-spinner fa-pulse" />
          </div>
        ) : (
          <div>Slot: {slot.slot} </div>
        )}
      </Col>
    </Fragment>
  );
};

export default SlotHeading;
