import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookmarks }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                onToggleBookmarks(status._id);
            }}
        >
            <i
                className={
                    "bi bi-balloon-heart" + (status.bookmark ? "-fill" : "")
                }
            >
                {" "}
            </i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.object.isRequired,
    onToggleBookmarks: PropTypes.func.isRequired
};

export default BookMark;
