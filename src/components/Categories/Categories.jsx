import React, { useState } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { productData } from '../../utils/data';
import './Categories.css';

const Categories = () => {

    const [counts, setCounts] = useState({});

    const handlePressIncrement = (index) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 0) + 1
        }));
    }

    const handlePressDecrement = (index) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [index]: Math.max((prevCounts[index] || 0) - 1, 0) 
        }));
    }

    return (
        <section className="categories">
            <Container>
                <Row>
                    <Col md="12" className="mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="heading">Products</h1>
                            <Button className="btn primary-btn">View All</Button>
                        </div>
                    </Col>

                    {productData.map((product, index) => (
                        <Col md={4} sm={6} key={index} className="mb-4">
                            <Card className="product-card">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    className="img-fluid"
                                    alt={product.title}
                                />
                                <Card.Body>
                                    <h5 className="product-title">{product.title}</h5>
                                    <p className="product-category">{product.cat}</p>

                                    <div className="d-flex align-items-center">
                                        <span className="product-price">
                                            Rs. {product.offerPrice > 0 ? product.offerPrice : product.price}
                                        </span>
                                        {product.offerPrice > 0 && (
                                            <span className="old-price ms-2">
                                                Rs. {product.price}
                                            </span>
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="text-warning">⭐ {product.rating}</span>

                                        <div className="quantity-controls">
                                            <button className="btn-inc" onClick={() => handlePressIncrement(index)}>+</button>
                                            <span className="count">{counts[index] || 0}</span>
                                            <button className="btn-dec" onClick={() => handlePressDecrement(index)}>-</button>
                                        </div>

                                        <Button className="btn-add">Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Categories;
