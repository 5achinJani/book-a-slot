import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Header from "components/common/Header";
const Layout = props => {
  return (
    <Fragment>
      <Container>
        <Header />
        {props.children}
      </Container>
    </Fragment>
  );
};

export default Layout;
