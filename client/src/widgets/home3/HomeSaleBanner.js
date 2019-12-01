
/**
 * Home 3 Sale Banner
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class HomeSaleBanner extends Component {

   render() {
    return (
        <div className="col-sm-12">
            <div className="moderncover_banner_wrapper">
                <div className="moderncover_banner moderncover_banner-style-style-1 moderncover_banner-effect-none ciya-banner-3">
                    {/* <img className="moderncover_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/categories/modern/sub-banner.jpg`)}  /> */}
                <div className="moderncover_banner-content p-4 p-sm-5 moderncover_banner-content-hleft moderncover_banner-content-vmiddle ">
                    <div className="moderncover_banner-content-wrapper">
                    <div className="moderncover_banner-content-inner-wrapper">
                        <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-1 moderncover_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="moderncover_banner-text tag-text"> only 24 hours</div>
                        </div>
                        <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="moderncover_banner-text"> Up To 50% Off</div>
                        </div>
                        <div className="moderncover_banner-text-wrap moderncover_banner-text-wrap-3 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="moderncover_banner-text"> Final Sale Items</div>
                        </div>
                        <div className="moderncover_banner-btn-wrap moderncover_banner-btn-style-link moderncover_banner-btn-shape-square">
                        <Link to="/shop" className="moderncover_banner-btn inline_hover">Shop now</Link></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )
}
}

export default HomeSaleBanner;

