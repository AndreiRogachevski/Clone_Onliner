import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../Style/swiper.css';
import { useEffect } from 'react';
import { FreeMode } from 'swiper';
import { DotLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { productsApi } from '../../API/productAPI';
import { selectProducts } from '../../features/products/productSlice';

export default function HotPrice() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(productsApi.fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h3>Лучшие предложения</h3>
      {products.status !== 'idle' && products.data.length ? (
        <DotLoader />
      ) : (
        <Swiper
          slidesPerView={8}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {products.data
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
                  <p className="card-price">
                    {item.price} ${' '}
                    <span className="card-discount">
                      <i className="bi bi-fire"></i> -{item.discountPercentage}{' '}
                      %
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
}
