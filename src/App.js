import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter(user => user._id !== id))
    }
    const handleToggleBookmarks = (id) => {
            setUsers(users.map(user => {
                if (user._id === id) {
                    return {...user, bookmark: !user.bookmark}
                } else {return user}
            })
        )
    }

    return (
        <>
            <h2>
                <SearchStatus length={users.length}/>
            </h2>
            {users.length > 0 &&
                <Users 
                    users={ users } 
                    onDelete={ handleDelete } 
                    onToggleBookmarks={ handleToggleBookmarks } 
                />
            }

        </>
    )

}

export default App