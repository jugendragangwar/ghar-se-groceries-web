import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { REVIEWS_DATA } from '../db/data';

const ReviewSection: React.FC = () => {
    return (
        <section className='section_margin'>
            <h1 className="main_heading">
                Customer's {' '}
                <span className="heading_span">
                    Review
                </span>
            </h1>

            <div className="mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={7}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    loop={true}
                    breakpoints={{
                        450: { slidesPerView: 2 },
                        970: { slidesPerView: 3 },
                    }}
                    className="review-slider"
                >
                    {REVIEWS_DATA.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center p-8 py-14 h-full flex flex-col justify-between card_border">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="mx-auto w-24 h-24 object-cover rounded-full mb-4"
                                />
                                <p className="card_description mb-4">{review.text}</p>
                                <h3 className="card_heading">{review.name}</h3>
                                <div className="flex justify-center text-orange-500 mt-2">
                                    {[...Array(4)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <FaStarHalfAlt />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ReviewSection;
