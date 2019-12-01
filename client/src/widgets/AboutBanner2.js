/**
 * About Banner 2
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

function AboutBanner2() {

    return (
            <div className="section-wrapper section-ptb">
            <div className="container">
            <Row>
                <Col lg={5}>
                {/* <img src={require(`../assets/images/about-us.jpg`)}  className="img-fluid" /> */}
                </Col>
                <Col lg={7} className="mt-4 mt-lg-0">
                <div className="section-title mb-3">
                    <h2 className="font-bold">Get to know us better.</h2>
                </div>
                <p>We are Ciya Shop. Our store is more than just another average online retailer. We sell
                    not only top quality products, but give our customers a positive online shopping
                    experience. Forget about struggling to do everything at once taking care of the family.
                </p>
                <div className="moderncover_list_wrapper mb-3">
                    <ul className="moderncover_list list icon-list-type-none">
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="moderncover-list-info">
                       There are basically six key areas to higher achievement
                        </p>
                    </li>
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="moderncover-list-info">
                       The first thing to remember about success is that it
                        </p>
                    </li>
                    <li>
                        <i className="fa fa-check-square" />
                        <p className="moderncover-list-info">
                        Belief – believing in yourself and those around you
                        </p>
                    </li>
                    </ul>
                </div>
                <Row className="mt-4 pt-4 mt-sm-5 pt-sm-5 border-top no-gutters">
                    <Col sm={6} className="pr-2">
                    <div className="moderncover_info_box moderncover_info_box-layout-style_2 moderncover_info_box-content_alignment-left moderncover_info_box-with-icon moderncover_info_box-icon-source-font moderncover_info_box-icon-style-border moderncover_info_box-icon-size-sm moderncover_info_box-icon-shape-round moderncover_info_box-icon_position-left info_box-step_position-above_title">
                        <div className="moderncover_info_box-inner clearfix moderncover-info-left-icon">
                        <div className="moderncover_info_box-icon">
                            <div className="moderncover_info_box-icon-wrap">
                            <div className="moderncover_info_box-icon-outer">
                                <div className="moderncover_info_box-icon-inner" style={{borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-archive" style={{color: '#dbdbdb'}} /> </div>
                            </div>
                            </div>
                        </div>
                        <div className="moderncover_info_box-content">
                            <div className="moderncover_info_box-content-wrap">
                            <div className="moderncover_info_box-content-inner">
                                <h5 className="moderncover_info_box-title" style={{color: '#323232'}}>
                                Our Store </h5>
                                <div className="moderncover_info_box-description">
                                <p>But give our customers a positive online.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col sm={6} >
                    <div className="moderncover_info_box moderncover_info_box-layout-style_2 moderncover_info_box-content_alignment-left moderncover_info_box-with-icon moderncover_info_box-icon-source-font moderncover_info_box-icon-style-border moderncover_info_box-icon-size-sm moderncover_info_box-icon-shape-round moderncover_info_box-icon_position-left info_box-step_position-above_title mt-4 mt-sm-0">
                        <div className="moderncover_info_box-inner clearfix moderncover-info-left-icon">
                        <div className="moderncover_info_box-icon">
                            <div className="moderncover_info_box-icon-wrap">
                            <div className="moderncover_info_box-icon-outer">
                                <div className="moderncover_info_box-icon-inner" style={{borderColor: '#dbdbdb', borderWidth: '2px', borderStyle: 'solid'}}>
                                <i className="fa fa-align-center" style={{color: '#dbdbdb'}} />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="moderncover_info_box-content">
                            <div className="moderncover_info_box-content-wrap">
                            <div className="moderncover_info_box-content-inner">
                                <h5 className="moderncover_info_box-title" style={{color: '#323232'}}>
                                Our Mission </h5>
                                <div className="moderncover_info_box-description">
                                <p>Depending on the device you use to access.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            </div>
        </div>


        )

    }

export default AboutBanner2;
