import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import { appRoutesConst } from "app/navigation";
import SlotsPage from "pages/Slots/SlotsPage";
import ViewSlotPage from "pages/ViewSlot/ViewSlotPage";

export const AppRoutes = () => (
  <Fragment>
    <Route exact path="/" component={SlotsPage} />
    <Route exact path={`${appRoutesConst.slot}/:id`} component={ViewSlotPage} />
  </Fragment>
);
