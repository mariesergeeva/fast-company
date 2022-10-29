import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    let headerText = "";
    let headerClass = "";
    if (length > 0) {
        headerClass = "badge bg-primary";
        switch (length) {
        case 2:
        case 3:
        case 4:
            headerText = length + " человека тусанут с тобой сегодня";
            break;
        default:
            headerText = length + " человек тусанет с тобой сегодня";
            break;
        }
    } else if (length === 0) {
        headerClass = "badge bg-danger";
        headerText = "Никто с тобой не тусанет";
    }
    return <span className={headerClass}>{headerText}</span>;
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
