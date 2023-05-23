import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import SignIn from "./signIn";
// import YearPicker from "react-year-picker";
import AccountBook from "../view/AccountBook";

function Main() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={1}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">통계</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second">알람</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">가계부</Nav.Link>
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
