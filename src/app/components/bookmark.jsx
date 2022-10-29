import React from "react"

const BookMark = ({ status, onToggleBookmarks }) => {
    return (
        <button className="btn btn-primary" 
            onClick={() => {onToggleBookmarks(status._id)}}
        >
            <i className={"bi bi-balloon-heart" + (status.bookmark ? '-fill' : '')}> </i>
        </button>
    )
}

export default BookMark