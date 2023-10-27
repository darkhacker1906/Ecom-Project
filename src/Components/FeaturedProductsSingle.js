import React, { useDeferredValue } from 'react'
import { getPriceAfterDiscount } from '../BLL/utility'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../Redux/actions/Actions';

//props.product

function FeaturedProductsSingle(props) {
  var dispatch=useDispatch();
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
  <div className="product-item bg-light mb-4">
    <div className="product-img position-relative overflow-hidden">
      <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
      <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-search" />
        </a>
      </div>
    </div>
    <div className="text-center py-4">
      <a className="h6 text-decoration-none text-truncate" href="">
       {props.product.title}
      </a>
      <p classname="h6 text-decoration-none m-1" >
        {props.product.description}
      </p>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>${getPriceAfterDiscount(props.product.price,props.product.discountPercentage)}</h5>
        <h6 className="text-muted ml-2">
          <del>${props.product.price}</del>
          -({props.product.discountPercentage}%)
        </h6>
      </div>
      <div>
        <button onClick={()=>{dispatch(add_to_cart(props.product))}}className='btn btn-success mb-2'>Add to Cart</button> 
      </div>
      <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
      </div>
    </div>
  </div>
</div>

  )
}

export default FeaturedProductsSingle
