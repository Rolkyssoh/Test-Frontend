import { Image, Text } from "@fluentui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { IconInfos } from "../svgComponent/iconInfos";
import { IconLock } from "../svgComponent/iconLock";
import { IconRestaurant } from "../svgComponent/iconRestaurant";

import "./navbar.component.scss";

const menuArray = [
    { id: 1, path: `/mm`, label: "Magasin", icon: IconLock },
    {
        id: 2,
        path: `/xx`,
        label: "Restauration",
        icon: IconRestaurant,
    },
    { id: 3, path: `/vv`, label: "Informations", icon: IconInfos },
];

export const Navbar = () => {
    return (
        <div className="navbar">
            {menuArray.map((_) => (
                <NavLink
                    key={_.id}
                    to={_.path}
                    className={({ isActive }) =>
                        [
                            "navbar__route",
                            isActive ? "navbar__route--current" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }
                >
                    {/* <Image src={_.icon} style={{ marginRight: 2 }} /> */}
                    <_.icon />
                    <Text variant="medium" className="navbarelmt__textstyle">
                        {_.label}
                    </Text>
                </NavLink>
            ))}
        </div>
    );
};
