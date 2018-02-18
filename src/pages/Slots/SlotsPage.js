import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

import Layout from "components/common/Layout";
import SlotListContainer from "containers/slots/SlotListContainer";
const SlotsPage = () => {
  return (
    <Fragment>
      <Layout>
        <Row>
          <Col>
            <h4>Slots</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <SlotListContainer />
          </Col>
        </Row>
      </Layout>
    </Fragment>
  );
};

export default SlotsPage;
