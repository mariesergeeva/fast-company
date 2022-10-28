import React from "react"

const BookMark = ({ status, ...rest }) => {
    return (
        <button className="btn btn-primary" 
            onClick={() => {rest.onToggleBookmarks(status._id)}}
        >
            <i className={"bi bi-balloon-heart" + (status.bookmark ? '-fill' : '')}> </i>
        </button>
    )
}

export default BookMark