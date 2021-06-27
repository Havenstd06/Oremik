/*
 * Copyright (©) 2021-2021 Thomas Drumont
 */

import React from "react";

const TopClicheCard = ({ size, image }) => {
    return (
        <a
            data-lg-size={size}
            className="m-2 cursor-pointer"
            data-src={image}
            data-sub-html=""
        >
            <img
                className="img-responsive"
                src={image}
            />
        </a>
    )
}

export default TopClicheCard;
