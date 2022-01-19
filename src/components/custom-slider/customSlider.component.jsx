import React from "react";
import { DefaultButton, Image, Text } from "@fluentui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/image1";
import image2 from "../../assets/images/image2";
import image3 from "../../assets/images/image3";

import "./customslider.component.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

const data = [
    { id: 1, title: "title 1", subTitle: "date 1", image: `${image1}` },
    { id: 2, title: "title 2", subTitle: "date 2", image: `${image2}` },
    { id: 3, title: "title 3", subTitle: "date 3", image: `${image3}` },
    { id: 4, title: "title 4", subTitle: "date 4", image: `${image1}` },
    { id: 5, title: "title 5", subTitle: "date 5", image: `${image2}` },
    { id: 5, title: "title 6", subTitle: "date 6", image: `${image3}` },
];

export const CustomSlider = ({ subTitle, buttonText }) => {
    return (
        <div className="custom-slider__container">
            <Text variant="xxLarge" className="custom-slider__header">
                {subTitle}
            </Text>
            <div className="custom-slider__content">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={15}
                    centeredSlides={true}
                    centeredSlidesBounds
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                        // stopOnLastSlide: true,
                    }}
                    className="swiper-custom"
                >
                    {data.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="swiper-slid-custom"
                        >
                            {/* <div className="silde-content"> */}
                            <Image
                                src={item.image}
                                height={"100%"}
                                width={"100%"}
                                style={
                                    {
                                        // borderTopLeftRadius: 10,
                                        // borderTopRightRadius: 10,
                                        // borderBottomLeftRadius: 10,
                                        // borderBottomRightRadius: 10,
                                        // borderRadius: 2,
                                    }
                                }
                            />
                            <div className="item-text-content">
                                <Text
                                    variant="xxLarge"
                                    style={{ color: "#fff" }}
                                >
                                    {item.title}
                                </Text>
                                <Text variant="large" style={{ color: "#fff" }}>
                                    {item.subTitle}
                                </Text>
                            </div>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="custom-slider__footer">
                {buttonText && (
                    <DefaultButton
                        text={buttonText}
                        className="button-slider__style"
                    />
                )}
            </div>
        </div>
    );
};
