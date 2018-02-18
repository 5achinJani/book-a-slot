import React, { Fragment } from "react";
import SlotListItem from "components/slots/SlotListItem";
const SlotList = props => {
  const { data, isLoading } = props.slots;
  return (
    <Fragment>
      <div className="card slots">
        <ul className="list-group list-group-flush">
          {isLoading ? (
            <li className="list-group-item slots__item">
              Loading slots.. <i className="fa fa-spinner fa-pulse" />
            </li>
          ) : null}

          {Object.keys(data).map(key => {
            return <SlotListItem key={key} slot={data[key]} />;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default SlotList;
