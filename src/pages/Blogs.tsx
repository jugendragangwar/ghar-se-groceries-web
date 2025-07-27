import React from "react";
import { BLOGS_DATA } from "../db/data";

const BlogsSection: React.FC = () => {
    return (
        <section className="section_margin">
            <h1 className="main_heading">
                Our{' '}
                <span className="heading_span">
                    Blogs
                </span>
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {BLOGS_DATA.map(({ id, image, date, title, summary }) => (
                    <div
                        key={id}
                        className="card_border px-2 py-2"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-52 object-cover rounded-xl mb-4"
                        />
                        <p className="text-sm text-gray-500 mb-2">{date}</p>
                        <h3 className="card_heading mb-1 capitalize">
                            {title}
                        </h3>
                        <p className="card_description mb-2">
                            {summary}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogsSection;
