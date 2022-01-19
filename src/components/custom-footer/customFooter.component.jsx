import { Image, Text } from "@fluentui/react";
import React from "react";
import iconHome from "../../assets/icons/home.svg";
import iconCar from "../../assets/icons/car.svg";
import iconUser from "../../assets/icons/user.svg";
import { NavLink } from "react-router-dom";

import "./customfooter.component.scss";

const menuFooterArray = [
    { id: 21, path: `/`, label: "Accueil", icon: `${iconHome}` },
    {
        id: 22,
        path: `/qq`,
        label: "Car",
        icon: `${iconCar}`,
    },
    { id: 23, path: `/cc`, label: "User", icon: `${iconUser}` },
];

export const CustomFooter = () => {
    return (
        <div className="customfooter">
            {/* <div className="custom-footer__item">
                <Image width={48} height={48} src={iconHome} />
                <Text variant="large" className="custom-footer__text">
                    Accueil
                </Text>
            </div> */}
            {menuFooterArray.map((_) => (
                <NavLink
                    key={_.id}
                    to={_.path}
                    className={({ isActive }) =>
                        [
                            "customfooter__route",
                            isActive ? "customfooter__route--current" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }
                >
                    <div className="customfooteritem">
                        <Image width={48} height={48} src={_.icon} />
                        <Text
                            variant="large"
                            className="customfooteritem__textstyle"
                            // className={({ isActive }) =>
                            //     [
                            //         "customfooteritem__textstyle",
                            //         isActive
                            //             ? "customfooteritem__textstyle--current"
                            //             : null,
                            //     ]
                            //         .filter(Boolean)
                            //         .join(" ")
                            // }
                        >
                            {_.label}
                        </Text>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};
