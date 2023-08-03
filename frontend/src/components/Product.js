import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: true };
      default:
        return state;
    }
  };

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
        const result = await axios.get(`/api/product/slug/${slug})`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, [error.message, slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Link to="/home">
      <div
        className="d-flex justify-content-center align-items-center"
        styles="height: 100vh;"
      >
        <div>
          <div
            key={product.slug}
            className="justify-content-center align-items-center m-5
              card bg-danger border-dark"
            styles="width: 18rem;"
          >
            <h1>Hola</h1>
            <img
              className="justify-content-center align-items-center "
              src={product.image}
              //   className=""
              alt={product.slug}
            />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <h4 class="card-title">
                <strong>${product.price}</strong>
              </h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" class="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          ))
        </div>
      </div>
    </Link>
  );
};

export default Product;
