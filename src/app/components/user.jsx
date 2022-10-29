import React from "react"
import Qualitie from './qualitie'
import BookMark from './bookmark'


const User = ({ user, onDelete, onToggleBookmarks }) => {
    const qualities = user.qualities
    return (
        <tr key = {user._id}>
                            <td>{user.name}</td>
                            <td>
                                {qualities.map(qualitie => {
                                    return <Qualitie key={qualitie._id} qualitie={qualitie} />                        
                                })}
                            </td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate + ' / 5'}</td>
                            <td>
                                <BookMark 
                                    status={user} 
                                    onToggleBookmarks={onToggleBookmarks} />
                            </td>
                            <td><button
                                className="btn btn-danger btn-sm m-2"
                                onClick={() => {onDelete(user._id)}}
                            >
                                delete
                            </button></td>
        </tr>
    )
}

export default User