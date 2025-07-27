import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { VATEGORIES_DATA } from '../db/data';



const CategoryCard = ({ title, offer, image }: { title: string; offer: string; image: string }) => (
    <div className="h-auto text-center card_border">
        <div>
            <img src={image} alt={title} className="w-full h-50 sm:h-64 mx-auto mb-4 object-contain" />
        </div>
        <h3 className="card_heading mb-2 capitalize">{title}</h3>
        <p className="card_description mb-4">{offer}</p>
    </div>
);

const Categories: React.FC = () => {
    return (
        <section className="section_margin">
            <h1 className="main_heading">
                Our{' '}
                <span className="heading_span">
                    Categories
                </span>
            </h1>

            {/* Mobile View (Swiper) */}
            <div className="md:hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    {VATEGORIES_DATA.map((cat, idx) => (
                        <SwiperSlide key={idx}>
                            <CategoryCard {...cat} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop View (Grid) */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {VATEGORIES_DATA.map((cat, idx) => (
                    <CategoryCard key={idx} {...cat} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
