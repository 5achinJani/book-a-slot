import React, { Fragment } from "react";
import classNames from "classnames";
import { ViewSlotLink } from "app/navigation";
import { ISlot } from "services/slots";

type IProps = {
  slot: ISlot
};

const SlotListItem = (props: IProps) => {
  const { id, slot, userId } = props.slot;
  const liClass = classNames({
    "list-group-item": true,
    slots__item: true,
    "slots__item--booked": userId
  });
  return (
    <Fragment>
      <ViewSlotLink id={id} className={liClass}>
        {slot}
      </ViewSlotLink>
    </Fragment>
  );
};

export default SlotListItem;
