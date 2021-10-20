import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import blog4 from '../../images/blog/4.jpg'
import blog5 from '../../images/blog/5.jpg'
import blog6 from '../../images/blog/6.jpg'
import { Link } from 'react-router-dom';



const Blog = () => {
    return (
        <Container className="my-5 blog-container pt-5 ">
            <h3 className="choose-text">OUR RECENT BLOGS</h3>
            <Row lg={2} md={2} sm={1} xs={1}>
                <Col>
                    <img src={blog1} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog1} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 4 Oct 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 12 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link to="" className="see-more">See more ...</Link> </p>

                </Col>
                <Col>
                    <img src={blog2} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog2} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 8 Sep 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 16 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link to="" className="see-more">See more ...</Link> </p>

                </Col>
                <Col>
                    <img src={blog3} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog3} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 5 Aug 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 52 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link to="" className="see-more">See more ...</Link> </p>

                </Col>
                <Col>
                    <img src={blog4} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog4} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 1 Feb 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 22 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link to="" className="see-more">See more ...</Link> </p>

                </Col>
                <Col>
                    <img src={blog5} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog5} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 31 Jan 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 11 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link to="" className="see-more">See more ...</Link> </p>

                </Col>
                <Col>
                    <img src={blog6} className="img-fluid mt-5 mb-3 border" alt="" />
                    <h5>Doccure – Making your clinic painless visit?</h5>
                    <div className="blog-info my-3">
                        <img src={blog6} width="50px" height="50px" alt="" />
                        <p className="text-warning">Dr. Ruby Perrin</p>
                        <p><i className="far fa-clock text-info"></i> 1 Jan 2021 </p>
                        <p><i className="fas fa-comments text-info"></i> 18 Comments </p>
                        <p><i className="fas fa-tags text-info"></i> Health Tips </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo erty consequat. <Link className="see-more">See more ...</Link> </p>

                </Col>
            </Row>
        </Container>
    );
};

export default Blog;