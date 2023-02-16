import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsApi } from '../../API/productAPI';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../features/products/productSlice';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../Style/swiper.css';

// import required modules
import { FreeMode } from 'swiper';

export default function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(productsApi.fetchProducts());
  }, [dispatch]);
  return (
    <div className="preview">
      <h2>КАТАЛОГ</h2>
      <Swiper
        slidesPerView={8}
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {products
          .slice()
          .sort((a, b) => b.discountPercentage - a.discountPercentage)
          .map((item) => (
            <SwiperSlide key={item.id} className="card">
              <img
                src={item.thumbnail}
                className="card-img-top"
                alt="thumbnail"
              />
              <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h6 className="card-title">{item.title}</h6>
                <p className="card-price">
                  {item.price} ${' '}
                  <span className='card-discount'>
                    <i class="bi bi-fire"></i> -{item.discountPercentage} %
                  </span>
                </p>
                <p className="card-stock">{item.stock} шт.</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
