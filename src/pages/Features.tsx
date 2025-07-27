import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FEATURES_DATA } from '../db/data'


const Features = () => {


  return (
    <section className="section_margin">
      <h1 className="main_heading">
        Our{' '}
        <span className="heading_span">
          Features
        </span>
      </h1>

      <div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {FEATURES_DATA.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="py-7 text-center h-full card_border">
                <div className="mb-5">
                  <img src={feature.img} alt={feature.title} className="mx-auto" />
                </div>
                <h3 className="card_heading mb-2">
                  {feature.title}
                </h3>
                <p className="card_description">{feature.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Features