import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../Style/swiper.css';
import { FreeMode } from 'swiper';
import { DotLoader } from 'react-spinners';

export default function HotPrice({ products }) {
  return (
    <>
      <h3>Лучшие предложения</h3>
      {products.status !== 'idle' ? (
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
