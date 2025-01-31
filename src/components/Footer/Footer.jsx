import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer pt-5'>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">Categories</h6>
            <ul className="nav flex-column list-unstyled">
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>
                  Vegetables & Fruits
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>
                  Breakfast & Instant Food
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>
                  Bakery & Biscuits
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>
                  Atta, Rice & Dal
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">Get to know us</h6>
            <ul className="nav flex-column list-unstyled">
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Company</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>About</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Blog</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Help Center</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">For Customers</h6>
            <ul className="nav flex-column list-unstyled">
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Payments</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Shipping</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>Product Returns</a>
              </li>
              <li className="nav-item mb-3">
                <a href="#!" className='nav-link'>FAQ</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">Contact Us</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-house-door me-2"></i> No32, Stanley Road, Jaffna, Srilanka
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope me-2"></i> info@gmail.com
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2"></i> +94 77 234 0493
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center border-top mt-4 pt-3">
          <Col className="text-center">
            <p className="m-0 lh-sm">© 2025 Grocery App. All rights reserved.</p>
            <p className="m-0 lh-sm">Designed by Bavithragithan Kuganesan</p>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer;
