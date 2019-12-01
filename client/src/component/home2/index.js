/**
 *  Home New Fasshion Page
 */
import React , {Component} from 'react';
import HomeSlider from '../../widgets/HomSlider2.js';
import HomeBanner2 from '../../widgets/home2/HomeBanner2.js';
import NewCollecation from '../../widgets/home2/NewCollecation.js';
import DealOfTheWeek2 from '../../widgets/home2/DealOfTheWeek2.js';
// import ProductList from '../../widgets/home2/ProductList.js';
import Subscribe2 from '../../widgets/home2/Subscribe2.js';
import LatestBlogSlider from '../../widgets/home2/LatestBlogSlider.js';
import BrandLogoSlider from '../../widgets/BrandLogoSlider.js';
import ProductSlider from '../../widgets/ProductSlider.js';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const saleslider = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 2,
     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};





class HomePage2 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
     return (
          <div>
                 <HomeSlider />
                 <div id="content" className="site-content" tabIndex={-1}>
                    <div className="content-wrapper content-wrapper-vc-enabled">
                        <div className="container-fluid">
                            <Row>
                                <Col sm={12} className="px-0">
                                <div id="primary" className="content-area">
                                    <main id="main" className="site-main">
                                        <article className="page type-page status-publish hentry">
                                            <div className="container">
                                                <HomeBanner2 />
                                            </div>
                                            <Container>
                                                <Row className="mb-7">
                                                    <Col lg={4} className="mb-5 mb-lg-0">
                                                        <div className="moderncover_banner moderncover_banner-style-style-1 moderncover_banner-effect-border" style={{ backgroundImage: 'url(' + require(`../../assets/images/categories/new-fashion/adv-img4.jpg`) + ')' }} >
                                                        <img src={require(`../../assets/images/categories/new-fashion/adv-img4.jpg`)} className="moderncover_banner-image img-fluid" alt="bannner-img" />
                                                        <div className="moderncover_banner-content moderncover_banner-content-hleft  moderncover_banner-content-vtop">
                                                            <div className="moderncover_banner-content-wrapper">
                                                            <div className="moderncover_banner-content-inner-wrapper">
                                                                <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-1 hidden-lg hidden-md hidden-sm hidden-xs">
                                                                <div className="moderncover_banner-text">
                                                                    <h2 className="mb-0">New Collection</h2>
                                                                </div>
                                                                </div>
                                                                <div className="moderncover_banner-btn-wrap moderncover_banner-btn-style-link moderncover_banner-btn-shape-square mt-0">
                                                                <Link to="/shop" className="moderncover_banner-btn inline_hover">Shop Now</Link>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={8}>

                                                        <NewCollecation />
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <div className="countdown-main" style={{ backgroundImage: 'url(' + require(`../../assets/images/categories/new-fashion/offer-deal-bg.jpg`) + ')' }}  >
                                                <Container>
                                                        <DealOfTheWeek2 />
                                                </Container>
                                            </div>
                                            <div className="container moderncover-listing-wrapper">
                                                <Row className="section-ptb">
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col sm={12}>
                                                                <div className="section-title">
                                                                    <h2 className="title text-left">New Collection</h2>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="moderncover_products_listing_wrapper moderncover_products_listing-1">
                                                             <div className="products-listing-wrapper products-listing-type-carousel products-listing-without-intro">
                                                            <Row>
                                                                 <ProductSlider settings={saleslider}    />
                                                            </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="newsletter-section section-ptb" style={{ backgroundImage: 'url(' + require(`../../assets/images/categories/new-fashion/new-letter-bg.jpg`) + ')' }} >
                                                <Container>
                                                        <Subscribe2 />
                                                </Container>
                                            </div>
                                            <Container>
                                                <Row className="section-pt">
                                                <Col sm={12}>
                                                    <Row>
                                                    <Col sm={12}>
                                                        <div className="section-title">
                                                        <h2 className="title text-left">Latest Blog</h2>
                                                        </div>
                                                    </Col>
                                                    </Row>
                                                          <LatestBlogSlider />
                                                    </Col>
                                                </Row>
                                             </Container>
                                             <Container>
                                                <Row>
                                                    <BrandLogoSlider />
                                                </Row>
                                            </Container>
                                        </article>
                                    </main>
                                </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
          </div>
     )
    }
}
export default HomePage2;
