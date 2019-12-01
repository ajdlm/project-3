/**
 * Home 2 Product List
 */
import React , {Component} from 'react';
import ProductSlider from '../ProductSlider';
import { Row, Col,Container } from 'reactstrap';

class ProductList extends Component {

   render() {
    return (
            <div className="moderncover_products_listing_wrapper moderncover_products_listing-1">
                <div className="products-listing-wrapper products-listing-type-carousel products-listing-without-intro">
                    <Row>
                        <ProductSlider />
                    </Row>
                </div>
            </div>
      )
    }
 }

 export default ProductList;

