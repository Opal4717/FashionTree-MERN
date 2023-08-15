import React, { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';
import Loading from './Loading';
import { getError } from '../util';
import { Shop } from '../Shop';
// import './custom.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Product() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/product/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: cxtDispatch } = useContext(Shop);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/product/${product.id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, the product is out of stock');
      return;
    }
    cxtDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <Alert error={error} />
  ) : (
    <div className="container.fluid bg-secondary">
      <div className="container.fluid bg-light">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded-5"
              alt={product.slug}
            />
          </div>
          <div className="col-md-6 border border-info border-4 p-4 rounded-4">
            <div className="border-bottom">
              <h2>{product.name}</h2>
              <h5 className="text-warning">{product.brand}</h5>
            </div>

            <p>{product.description}</p>
            <p>
              <b>{product.rating}/5</b> rating
            </p>
            <strong className="text-warning">${product.price} </strong>
            <button onClick={addToCartHandler} className="btn btn-warning">
              <b>Add to Cart</b>
            </button>
            <div>
              {product.countInStock > 0 ? (
                <span className="badge rounded-pill bg-success text-warning ">
                  {product.countInStock} in stock
                  {/* <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    Inbox
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </button> */}
                </span>
              ) : (
                <b className="bg-danger rounded txt-black">Sold Out</b>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
