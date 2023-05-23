import { Nav, Button, Tab, Row, Col } from "react-bootstrap";

import AccountBook from "../view/AccountBook";
import { useState } from "react";

function Main(props) {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={1}>
          <Nav>
            <Nav.Item style={{ margin: "10px" }}>
              <Nav.Link
                style={{
                  minWidth: "100px",
                  backgroundColor: activeTab === "first" ? "#D3D5D0" : null,
                  color: "#F68181",
                  border: "solid 1px",
                }}
                eventKey="first"
                as={Button}
                variant="pills"
                onClick={() => setActiveTab("first")}
              >
                통계
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              style={{
                margin: "10px",
              }}
            >
              <Nav.Link
                style={{
                  minWidth: "100px",
                  backgroundColor: activeTab === "second" ? "#D3D5D0" : null,

                  color: "#F68181",
                  border: "solid 1px",
                }}
                eventKey="second"
                as={Button}
                variant="pills"
                onClick={() => setActiveTab("second")}
              >
                알람
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              style={{
                margin: "10px",
              }}
            >
              <Nav.Link
                style={{
                  minWidth: "100px",
                  backgroundColor: activeTab === "third" ? "#D3D5D0" : null,

                  color: "#F68181",
                  border: "solid 1px",
                }}
                eventKey="third"
                as={Button}
                variant="pills"
                onClick={() => setActiveTab("third")}
              >
                가계부
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={11}>
          <Tab.Content>
            <Tab.Pane eventKey="first">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="second">{/* <Sonnet /> */}</Tab.Pane>
            <Tab.Pane eventKey="third">
              <AccountBook />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Main;
