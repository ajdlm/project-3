/**
 * Home 3 Page Banner
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class HomeBanner3 extends Component {

   render() {
    return (
        <div className="row">
            <div className="col-md-6">
            <div className="moderncover_banner_wrapper ">
                <Link className="pgs_banner-link" to="/shop">
                <div className="moderncover_banner moderncover_banner-style-style-1 moderncover_banner-effect-none ciya-banner-1"> 
                {/* <img className="moderncover_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/categories/modern/women.jpg`)}  /> */}
                    <div className="moderncover_banner-content moderncover_banner-content-hcenter moderncover_banner-content-vbottom">
                    <div className="moderncover_banner-content-wrapper">
                        <div className="moderncover_banner-content-inner-wrapper">
                        <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-1 moderncover_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                            <div className="moderncover_banner-text tag-text"> Women's collections</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
            <div className="moderncover_banner_wrapper ">
                <Link className="pgs_banner-link" to="/shop">
                <div className="moderncover_banner moderncover_banner-style-style-1 moderncover_banner-effect-none ciya-banner-2">
                    {/* <img className="moderncover_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/categories/modern/men.jpg`)}  /> */}
                    <div className="moderncover_banner-content moderncover_banner-content-hcenter moderncover_banner-content-vbottom">
                    <div className="moderncover_banner-content-wrapper">
                        <div className="moderncover_banner-content-inner-wrapper">
                        <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-1 moderncover_banner-text-bg_color">
                            <div className="moderncover_banner-text tag-text"> Men's collections</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
            </div>
         </div>
      )
}
}

export default HomeBanner3;

