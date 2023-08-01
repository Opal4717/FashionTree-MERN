import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import './custom.css';

const reducer = (state, action) =>{
  switch (action.type){
    case 'FETCH_REQUEST':
      return{...state, loading:true};
      case 'FETCH_SUCCESS':
        return{...state,products loading:false};
        case 'FETCH_ERROR':
          return{...state, loading:true};   
          default:
            return state  
  }
}

const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <Link to="/home">
      <div
        className="d-flex justify-content-center align-items-center"
        styles="height: 100vh;"
      >
        <div>
          {products.map((product) => (
            <div
              key={product.slug}
              className="justify-content-center align-items-center m-5
          card bg-danger border-dark"
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
                  <strong>${product.price}</strong>
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
