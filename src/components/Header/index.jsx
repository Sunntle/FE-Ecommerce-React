import { faBars, faCartShopping, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "assets/images/logo.png";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Input, Nav, Row } from "reactstrap";
import "./style.scss";
import { useSelector } from "react-redux";
const Header = (props, ref) => {
  const cart = useSelector((state) => state.cartReducer);
  useEffect(() => {
    const navsub = document.querySelectorAll(".navsub");
    const showNav = document.querySelector(".showNav");
    const handleClick = (e) => {
      e.preventDefault();
      navsub.forEach((el) => {
        el.classList.toggle("d-none");
      });
    };
    showNav.addEventListener("click", handleClick);
    return () => {
      showNav.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="bg-light">
      <div className="header__top bg-dark">
        <Container>
          <div className="text-white align-items-center p-2 d-none d-md-flex">
            <Col lg="6" md="7">
              <p className="m-0">Free shipping, 30-day money-back or exchange guarantee...</p>
            </Col>
            <Col lg="6" md="5">
              <div className="header__top__right text-end">
                <Link to="/sign-in" className="text-decoration-none text-uppercase text-white px-2">
                  Sign in
                </Link>
                <Link href="#" className="text-decoration-none text-uppercase text-white px-2">
                  FAQs
                </Link>
              </div>
            </Col>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="2" xs="6">
            <div className="header__logo py-2">
              <img className="img-fluid" src={Images} alt="Logo" />
            </div>
          </Col>
          <Col xs="6" className="d-lg-none text-end">
            <Link href="#" className="text-decoration-none text-dark showNav fs-3">
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </Col>
          <Col lg="7" className="d-none d-lg-block text-start navsub">
            <Nav className="header__menu d-lg-flex justify-content-center  d-inline-block">
              <NavLink
                className="fs-5 fw-semibold text-black nav-link home"
                exact="true"
                activeclassname="active"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className=" fs-5 fw-semibold text-black nav-link shop"
                exact="true"
                activeclassname="active"
                to="/shop"
              >
                Shop
              </NavLink>
              <div className="menu-lv1 position-relative">
                <NavLink className=" fs-5 fw-semibold text-black nav-link page" activeclassname="active" to="/pages">
                  Pages
                </NavLink>
                <Nav className="menu-lv2 bg-black rounded">
                  <NavLink className=" text-light nav-link" exact="true" activeclassname="active" to="/blog">
                    Blog
                  </NavLink>
                  <NavLink className=" text-light nav-link" exact="true" activeclassname="active" to="/contact">
                    Contact
                  </NavLink>
                </Nav>
              </div>
              <NavLink
                className=" fs-5 fw-semibold text-black nav-link blog"
                exact="true"
                activeclassname="active"
                to="/contact"
              >
                Blog
              </NavLink>
              <NavLink
                className=" fs-5 fw-semibold text-black nav-link contact"
                exact="true"
                activeclassname="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Col>
          <Col lg="3" className="d-none d-lg-block navsub">
            <div className="header__icon d-flex p-lg-0 px-3 py-2 justify-content-start justify-content-lg-end align-items-center">
              <Input type="text" placeholder="Search..." />
              <Link className="text-black fs-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
              <Link className="text-black fs-5">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <div className="cart d-flex justify-content-center align-items-center">
                <Link to={"/cart"} className="text-black fs-5 position-relative">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div className="position-absolute countProduct fs-6 fw-bolder">
                    {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
                  </div>
                </Link>
                {/* <div className="price mx-2 fw-semibold">$25.00</div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
