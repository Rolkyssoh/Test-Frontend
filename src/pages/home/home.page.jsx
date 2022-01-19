import React from "react";
import {
    CustomCarroussel,
    CustomFooter,
    CustomHeader,
    CustomSlider,
    Navbar,
} from "../../components";
import iconArrow from "../../assets/icons/arrow-right.svg";

import "./home.page.scss";
import { Image, Text } from "@fluentui/react";

export const HomePage = () => {
    const carrouselWidth = window.innerWidth;
    return (
        <div className="home__container">
            <div className="home__header">
                <CustomHeader />
            </div>
            <div className="home__content">
                <div className="home__nav">
                    <Navbar />
                </div>
                <div className="content__container">
                    <div className="carroussel__padd">
                        <CustomCarroussel
                            title="THE PLACE TO BE"
                            buttonText="Voir toutes les actualités"
                        />
                    </div>
                    <div className="slider__center">
                        <CustomSlider
                            subTitle="ÉVENEMENTS TENDANCE"
                            buttonText="Voir tous les événements"
                        />
                    </div>
                    <div className="carroussel__padd">
                        <CustomCarroussel
                            title="QUESTIONNAIRES"
                            buttonEndText="Je participe"
                            buttonStartText="100 points"
                        />
                    </div>
                    <div className="carroussel__padd">
                        <CustomCarroussel title="NOS MARQUES" marque />
                    </div>
                </div>
            </div>

            <div className="home__footer">
                <div className="footer__text">
                    <Text variant="large" className="footer-text__style">
                        Découvrez tous les magasins
                    </Text>
                    <Image src={iconArrow} style={{ marginTop: 5 }} />
                </div>
                <CustomFooter />
            </div>
        </div>
    );
};
