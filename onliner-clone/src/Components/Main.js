import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { productsApi } from '../API/productAPI';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/products/productSlice';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './products/swiper/style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper';

export default function Main() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  console.log(products);
  useEffect(() => {
    dispatch(productsApi.fetchProducts());
  }, [dispatch]);
  return (
    <main>
      <div className='preview'>
        <h1>Main</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt="thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Outlet />
      </div>
    </main>
  );
}
