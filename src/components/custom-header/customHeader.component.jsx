import { Image, Text } from "@fluentui/react";
import React from "react";
import iconMenu from "../../assets/icons/menu.svg";
import iconSearch from "../../assets/icons/search.svg";
import iconCodebar from "../../assets/icons/codebar.svg";

import "./customheader.component.scss";

export const CustomHeader = () => {
    return (
        <div className="custom-header__container">
            <div className="header__start">
                <Image src={iconMenu} />
            </div>
            <div className="header__center">
                <Text variant="xxLarge" style={{ color: "grey" }}>
                    LOGO
                </Text>
            </div>
            <div className="header__end">
                <Image src={iconSearch} />
                <Image src={iconCodebar} />
            </div>
        </div>
    );
};
