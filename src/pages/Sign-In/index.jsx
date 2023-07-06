import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "./SignInStyle.scss";
import { Link } from "react-router-dom";
function SignIn() {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <Container className="my-5 py-5 signin">
      <Row>
        <Col xs="12" md="7" className="mx-auto">
          <Nav className="justify-content-center mb-4">
            <NavItem>
              <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => toggleTab("1")}>
                <h2>Login</h2>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => toggleTab("2")}>
                <h2>Register</h2>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="p-5">
              <Form>
                <FormGroup>
                  <Input id="username" name="username" placeholder="Username" type="text" />
                </FormGroup>
                <FormGroup>
                  <Input id="examplePassword" name="password" placeholder="Password" type="password" />
                </FormGroup>
                <FormGroup className="text-start">
                  <Link to="/" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" className="btn-dark py-2 px-3">
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </TabPane>
            <TabPane tabId="2" className="p-5">
              <Form>
                <FormGroup>
                  <Input id="username" name="username" placeholder="Username" type="text" />
                </FormGroup>
                <FormGroup>
                  <Input id="examplePassword" name="password" placeholder="Password" type="password" />
                </FormGroup>
                <FormGroup>
                  <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="dark" className="py-2 px-3">
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
