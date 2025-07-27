import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Faq = {
    id: number;
    question: string;
    answer: string;
};

const FAQS_DATA: Faq[] = [
    {
        id: 1,
        question: "Are your vegetables and fruits organic?",
        answer:
            "Yes, all our vegetables and fruits are sourced from certified organic farms without the use of synthetic fertilizers or pesticides. We work directly with local farmers who follow strict organic certification standards.",
    },
    {
        id: 2,
        question: "How is the meat stored and delivered?",
        answer:
            "Our meat products are stored in hygienic, temperature-controlled facilities and delivered fresh in insulated packaging. We maintain the cold chain from farm to your doorstep to ensure maximum freshness and safety.",
    },
    {
        id: 3,
        question: "Do you offer farm-fresh dairy products?",
        answer:
            "Absolutely! Our dairy items are sourced directly from trusted local farms and delivered to you fresh and pure. All our dairy products are tested for quality and freshness before delivery.",
    },
    {
        id: 4,
        question: "Can I customize or schedule my delivery?",
        answer:
            "Yes, we provide flexible delivery options. You can choose your preferred delivery date and time during checkout. We also offer subscription services for regular deliveries at discounted rates.",
    },
];

const FaqSection: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="section_margin overflow-hidden">
            <h1 className="main_heading">
                Frequently Asked <span className="heading_span">Questions</span>
            </h1>

            <div className="space-y-4 max-w-5xl mx-auto">
                {FAQS_DATA.map(({ id, question, answer }) => {
                    const isOpen = activeId === id;
                    return (
                        <div
                            key={id}
                            className="card_border rounded-2xl"
                        >
                            <button
                                onClick={() => toggleFaq(id)}
                                className="w-full flex justify-between items-center text-left p-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <h3 className="card_heading pr-4">{question}</h3>
                                </div>
                                <ChevronDown
                                    className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : "text-gray-600"
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="pb-4">
                                    <div className="pl-7">
                                        <div className="h-px bg-gradient-to-r from-orange-200 to-transparent mb-4"></div>
                                        <p className="card_description">{answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FaqSection;
