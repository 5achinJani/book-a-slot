import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
const Header = () => {
  return (
    <Fragment>
      <Row className="mb-3">
        <Col>
          <h2>Book a slot</h2>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Header;
