import React, { useReducer, useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const getQualities = (user) => {
        return (
                user.qualities.map(quality => {
                    return <span className={'badge m-1 bg-' + quality.color}>{quality.name}</span>
                })
    )}

    const handleUserChange = (id) => {
        setUsers((prevState) => prevState.filter(user => user._id !== id))
    }

    const renderHeader = () => {
        let headerText = ''
        switch (users.length) {
            case 2: 
            case 3: 
            case 4:
                headerText = 'человека тусанет с тобой сегодня' 
                break;
            default: 
                headerText = 'человек тусанет с тобой сегодня' 
                break;
        }
        console.log(headerText)
        return (
            <span className="badge bg-primary">{users.length + ' ' + headerText}</span>
        )
    }

    const renderUsers = () => {
        return users.length !== 0 &&
            users.map(user => (
                <tr>
                    <td key = {user._id}>{user.name}</td>
                    <td>{getQualities(user)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate + ' / 5'}</td>
                    <td><button
                        className = "btn btn-danger btn-sm m-2"
                        onClick = {() => {handleUserChange(user._id)}}
                    >
                        delete
                    </button></td>
                </tr>
            ))
    }

    return (
        <>
            <h2>{renderHeader()}</h2>
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
        </>
    )
}
    

export default Users