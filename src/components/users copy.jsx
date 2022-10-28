import React, { useReducer, useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const renderQualities = (qualities) => {
        return (
                qualities.map(quality => {
                    return <span className={'badge m-1 bg-' + quality.color} key={quality._id}>{quality.name}</span>
                })
    )}

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter(user => user._id !== id))
    }

    const renderHeader = () => {
        let headerText = ''
        let headerClass = ''
        if (users.length > 0) {
            headerClass = 'badge bg-primary'
            switch (users.length) {
                case 2: 
                case 3: 
                case 4:
                    headerText = users.length + ' ' + 'человека тусанет с тобой сегодня' 
                    break;
                default: 
                    headerText = users.length + ' ' + 'человек тусанет с тобой сегодня' 
                    break;
            }

        } else if (users.length === 0) {
            headerClass = 'badge bg-danger'
            headerText = 'Никто с тобой не тусанет'
        }
        return (
            <span className={headerClass}>{headerText}</span>
        )
    }

    const renderUsers = () => {
        return users.length !== 0 &&
            users.map(user => (
                <tr key = {user._id}>
                    <td>{user.name}</td>
                    <td>{renderQualities(user.qualities)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate + ' / 5'}</td>
                    <td><button
                        className = "btn btn-danger btn-sm m-2"
                        onClick = {() => {handleDelete(user._id)}}
                    >
                        delete
                    </button></td>
                </tr>
            ))
    }

    return (
        <>
            <h2>{renderHeader()}</h2>
            {users.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderUsers()}
                    </tbody>
                </table>
            }
        </>
    )
}
    

export default Users