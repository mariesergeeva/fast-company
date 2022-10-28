import React from "react"

const Qualitie = ({ qualities }) => {

    return (
        qualities.map(quality => {
            return <span className={'badge m-1 bg-' + quality.color} key={quality._id}>{quality.name}</span>
        })
    )}


export default Qualitie