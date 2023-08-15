// import axios from 'axios';
// import React, { useEffect, useReducer } from 'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: true };
//     default:
//       return state;
//   }
// };

// const Carousel = () => {
//   const [{ loading, error, products }, dispatch] = useReducer(reducer, {
//     products: [],
//     loading: true,
//     error: '',
//   });
//   // const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: 'FETCH_REQUEST' });
//       try {
//         const result = await axios.get('/api/products');
//         dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
//       } catch (err) {
//         dispatch({ type: 'FETCH_FAIL', payload: err.message });
//       }
//       // setProducts(result.data);
//     };
//     fetchData();
//   }, []);

//   return loading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>{error}</div>
//   ) : (
//     <>
//     {products.map(product)=>(

//       <div id="carouselExampleCaptions" class="carousel slide">
//         <div class="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             class="active"
//             aria-current="true"
//             aria-label="Slide 1"
//             ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//             ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//             ></button>
//         </div>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="..." class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p>
//             </div>
//           </div>
//         </div>
//         )

//         {/* <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//           >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//           >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div> */}
//     </>
//     );
// };

// export default Carousel;
