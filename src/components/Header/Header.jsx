import React, { useState } from 'react';
import "./Header.css";
import { Col, Container, Row, Dropdown, InputGroup, Form, ListGroup, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/icons/logo.png";
import Cart from '../Cart/Cart';
import CategoriesList from './CategoriesList';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const [cartBox, setCartBox] = useState(false);
  const [showNavBar, setShowNavbar] = useState(false);
  const [dropDownShow, setDropDownShow] = useState(0);

  const handleDropDown = (type, id) => {
    if (window.innerWidth >= 1199) {
      type === "in" ? setDropDownShow(id) : setDropDownShow(0)
    }
    if (type === 'click') {
      setDropDownShow(dropDownShow === id ? 0 : id);
    }
  }

  return (
    <>
      <div className="top_header py-1">
        <Container>
          <Row className="align-items-center">
            <Col md={6} sm={6} xs={6}>
              <p className="mb-0">Super Value Deals = Save more with coupons</p>
            </Col>
            <Col md={6} sm={6} xs={6} className="text-end">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-menu-align-start" className="fw-bold text-white">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/english">English</Dropdown.Item>
                  <Dropdown.Item href="#/spanish">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/german">German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>

      <header className='py-3 border-bottom'>
        <Container>
          <Row className="align-items-center">
            <Col xl={2} lg={3} md={6} sm={5} xs={5}>
              <img src={logo} className='img-fluid' alt="logo" />
            </Col>

            <Col xl={5} lg={4} className='d-none d-lg-block'>
              <div className='search_box'>
                <InputGroup>
                  <Form.Control
                    placeholder="Search for Products"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    type="search"
                    className="rounded-1 py-2"
                  />
                  <i className="bi bi-search position-absolute"></i>
                </InputGroup>
              </div>
            </Col>

            <Col xl={3} lg={2} className='d-none d-lg-block'>
              <button type='button' className='btn secondary-btn'>
                <i className="bi bi-geo-alt me-2"></i> Location
              </button>
            </Col>

            <Col xl={2} lg={3} md={6} sm={7} xs={7}>
              <ListGroup horizontal className="justify-content-end">
                <ListGroup.Item className="border-0">
                  <span className='d-flex align-items-center'>
                    <i className="bi bi-person-circle h4 mb-0"></i>
                    <span className="ms-1 d-none d-sm-block body-text">
                      Account
                    </span>
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <span className='d-flex align-items-center'>
                    <span className="position-relative">
                      <i className="bi bi-heart h4 mb-0"></i>
                      <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                        2
                        <span className="visually-hidden">items in wishlist</span>
                      </span>
                    </span>
                    <span className="ms-2 d-none d-sm-block body-text">Wishlist</span>
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="border-0"
                  onClick={() => setCartBox(true)}
                >
                  <span className='d-flex align-items-center'>
                    <span className="position-relative">
                      <i className="bi bi-cart h4 mb-0"></i>
                      <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                        9
                        <span className="visually-hidden">items in cart</span>
                      </span>
                    </span>
                    <span className="ms-2 d-none d-sm-block body-text">Cart</span>
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className='border-0 d-block d-lg-none'>
                  <i className="bi bi-list h4"
                    onClick={() => setShowNavbar(!showNavBar)}
                    aria-controls={`offcanvasNavbar-expand-lg`}
                  ></i>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="menu">
        <Container>
          <Row>
            <Navbar expand='lg' className="p-0" >
              <Container fluid>
                <Navbar.Offcanvas
                  id="offcanvasNavbar-expand-lg"
                  aria-labelledby="offcanvasNavbarLabel-expand-lg"
                  placement="start"
                  show={showNavBar}
                >
                  <Offcanvas.Header className='justify-content-between border-bottom'>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                      <img src={logo} alt="logo" className='img-fluid' />
                    </Offcanvas.Title>
                    <button
                      className="btn btn-light btn-sm rounded-circle shadow-none"
                      onClick={() => setShowNavbar(false)}
                      aria-label="Close"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>

                  </Offcanvas.Header>
                  <Offcanvas.Body className='align-items-center'>
                    <div className="d-block d-lg-none">
                      <div className="search_box mt-2">
                        <InputGroup>
                          <Form.Control
                            placeholder="Search for Products"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            type="search"
                            className="rounded-1 py-2"
                          />
                          <i className="bi bi-search position-absolute"></i>
                        </InputGroup>
                      </div>
                      <button className='btn btn-light rounded-1 w-100 mb-3'>
                        <i className="bi bi-geo-alt me-2">Pick Location</i>
                      </button>
                    </div>
                    <div className="category_list">
                      <CategoriesList />
                    </div>

                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">About us</Nav.Link>
                      <Nav.Link href="#action2">Shop</Nav.Link>
                      <NavDropdown
                        title="Stores"
                        id={'offcanvasNavbarDropdown-expand-lg'}
                        show={dropDownShow === 1 ? true : false}
                        onClick={() => handleDropDown('click', 1)}
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Separated Link
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        className='dropdown-fullwidth'
                        title="All Departments"
                        id={'collapsible-nav-dropdown'}
                        show={dropDownShow === 2 ? true : false}
                        onClick={() => handleDropDown('click', 2)}
                      >
                        <Row>
                          <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                            <h6 className='primary-text sub-heading mb-1 ms-2'>
                              Diary, Bread Eggs
                            </h6>
                            <a className='dropdown-item' href='#action'>
                              Butter
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Milk Drinks
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Curd Yogurt
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Eggs
                            </a>
                          </Col>

                          <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                            <h6 className='primary-text sub-heading mb-1 ms-2'>
                              Diary, Bread Eggs
                            </h6>
                            <a className='dropdown-item' href='#action'>
                              Butter
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Milk Drinks
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Curd Yogurt
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Eggs
                            </a>

                          </Col>

                          <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                            <h6 className='primary-text sub-heading mb-1 ms-2'>
                              Diary, Bread Eggs
                            </h6>
                            <a className='dropdown-item' href='action'>
                              Butter
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Milk Drinks
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Curd Yogurt
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Eggs
                            </a>

                          </Col>

                          <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                            <h6 className='primary-text sub-heading mb-1 ms-2'>
                              Diary, Bread Eggs
                            </h6>
                            <a className='dropdown-item' href='#action'>
                              Butter
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Milk Drinks
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Curd Yogurt
                            </a>
                            <a className='dropdown-item' href='#action'>
                              Eggs
                            </a>

                          </Col>

                        </Row>
                      </NavDropdown>

                      <Nav.Link href="#action1">Blog</Nav.Link>
                      <Nav.Link href="#action2">Contact us</Nav.Link>

                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </div>

      <Cart show={cartBox} setCartBox={setCartBox} />
    </>
  );
};

export default Header;
