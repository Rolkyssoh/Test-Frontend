import React from "react";
import { DefaultButton, Image, Text } from "@fluentui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import image1 from "../../assets/images/image1";
import image2 from "../../assets/images/image2";
import image3 from "../../assets/images/image3";
import brand1 from "../../assets/images/brand1";
import brand2 from "../../assets/images/brand2";
import brand3 from "../../assets/images/brand3";
import brand4 from "../../assets/images/brand4";
import brand5 from "../../assets/images/brand5";

import "./customCarroussel.component.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const data = [
    { id: 1, title: "title 1", subTitle: "subtitle 1", image: `${image1}` },
    { id: 2, title: "title 2", subTitle: "subtitle 2", image: `${image2}` },
    { id: 3, title: "title 3", subTitle: "subtitle 3", image: `${image3}` },
];
const brandArray = [
    { id: 1, image: `${brand1}` },
    { id: 2, image: `${brand2}` },
    { id: 3, image: `${brand3}` },
];
const itemsArray = [
    { id: 11, image: `${brand1}` },
    { id: 12, image: `${brand2}` },
    { id: 13, image: `${brand3}` },
    { id: 14, image: `${brand4}` },
    { id: 15, image: `${brand1}` },
    { id: 16, image: `${brand3}` },
];
var menu = ["Slide 1", "Slide 2", "Slide 3"];

export const CustomCarroussel = ({
    title,
    buttonEndText,
    buttonStartText,
    buttonText,
    marque,
}) => {
    return (
        <div className="custom-carroussel__container">
            <Text variant="xxLarge" className="custom-carroussel__header">
                {title}
            </Text>
            <div className="custom-carroussel__content">
                {/* Image Slide */}
                {!marque && (
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            // stopOnLastSlide: true,
                        }}
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                origin: "left center",
                                translate: ["-5%", 0, -200],
                                rotate: [0, 100, 0],
                            },
                            next: {
                                origin: "right center",
                                translate: ["5%", 0, -200],
                                rotate: [0, -100, 0],
                            },
                        }}
                        pagination={{
                            clickable: true,
                            renderProgressbar: true,
                            renderCustom: true,
                            bulletClass: "custom-bullet-img",
                            bulletActiveClass: "custom-active-bullet-img",
                        }}
                        className="mySwiper6"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Image
                                    src={item.image}
                                    height={"100%"}
                                    width={"100%"}
                                />
                                <div className="item-content">
                                    {buttonStartText && (
                                        <DefaultButton
                                            text={buttonStartText}
                                            className="button-start"
                                        />
                                    )}
                                    <Text
                                        variant="xxLarge"
                                        style={{ color: "#fff" }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        variant="large"
                                        style={{ color: "#fff" }}
                                    >
                                        {item.subTitle}
                                    </Text>
                                    {buttonEndText && (
                                        <DefaultButton
                                            text={buttonEndText}
                                            className="button-end"
                                        />
                                    )}
                                    {/* For pagination */}
                                    <div className="scroll-bar"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Brand Slide */}
                {marque && (
                    <Swiper
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                            stopOnLastSlide: true,
                        }}
                        grabCursor={true}
                        effect={"creative"}
                        pagination={{
                            clickable: true,
                            renderProgressbar: true,
                            renderCustom: true,
                            bulletClass: "custom-bullet-brand",
                            bulletActiveClass: "custom-bullet-active-brand",
                            // horizontalClass: "swiper-pagination-custom",
                        }}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                origin: "left center",
                                translate: ["-5%", 0, -200],
                                rotate: [0, 100, 0],
                            },
                            next: {
                                origin: "right center",
                                translate: ["5%", 0, -200],
                                rotate: [0, -100, 0],
                            },
                        }}
                        className="brand-container"
                    >
                        {brandArray.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="brand-item">
                                    {itemsArray.map((item) => (
                                        <Image
                                            src={item.image}
                                            width={"100%"}
                                            height={70}
                                            key={item.id}
                                            // className="image-style"
                                            style={{ objectFit: "scale-down" }}
                                        />
                                    ))}
                                    <div className="brand-scroll-bar">
                                        <div className="swiper-pagination custom-swiper-pagination">
                                            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {/* </div>
                    )} */}
                {/* </Swiper> */}
            </div>
            <div className="custom-carroussel__footer">
                {buttonText && (
                    <DefaultButton
                        text={buttonText}
                        className="button__style"
                    />
                )}
            </div>
        </div>
    );
};
