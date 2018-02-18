import React, { Fragment } from "react";

import Layout from "components/common/Layout";
import ViewSlotContainer from "containers/slot/ViewSlotContainer";
const ViewSlotPage = props => {
  const { match } = props;
  return (
    <Fragment>
      <Layout>
        <ViewSlotContainer slotId={match.params.id} />
      </Layout>
    </Fragment>
  );
};

export default ViewSlotPage;
