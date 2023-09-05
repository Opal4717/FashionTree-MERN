import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Alert from './Alert';
// import './custom.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: true };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Alert error={error} />
  ) : (
    <>
      <main className="rounded bg-primary border border-info">
        <h4 className="">Product List</h4>
      </main>
      <div
        className="d-flex justify-content-center align-items-center"
        styles="height: 100vh;"
      >
        <div>
          {products.map((product) => (
            <Link
              to={`/product/${product.slug}`}
              key={product.slug}
              className="text-decoration-none "
            >
              <div
                className="justify-content-center align-items-center m-5
              card bg-light rounded-4 border-100p border-info"
                styles="width: 18rem;"
              >
                <img
                  className="justify-content-center align-items-center "
                  src={product.image}
                  //   className=""
                  alt={product.slug}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <h4 class="card-title">
                    <strong className="text-warning">${product.price}</strong>
                  </h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
