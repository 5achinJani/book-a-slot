import React from "react";
import { Link } from "react-router-dom";
import { push } from "react-router-redux";

export const appRoutesConst = {
  index: "/",
  slot: "/slot"
};

export const navigateToIndex = () => {
  return dispatch => {
    dispatch(push(appRoutesConst.index));
  };
};

export const IndexLink = props => {
  return (
    <Link {...props} to={appRoutesConst.index}>
      {props.children}
    </Link>
  );
};

export const ViewSlotLink = props => {
  const { id } = props;
  return (
    <Link {...props} to={`${appRoutesConst.slot}/${id}`}>
      {props.children}
    </Link>
  );
};
