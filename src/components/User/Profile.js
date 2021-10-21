import React, { useContext } from 'react'
import UsersContext from './../../context/Users/UsersContext'

export default function Profile(props) {
    const ctx = useContext(UsersContext);
    const { user } = ctx;
    console.log(user)

    return (
        <>
            <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                    <div class="-ml-px w-0 flex-1 flex">
                        <span class="ml-3">Mi perfil</span>
                        <p class="ml-3">{props.user.username}</p>
                        <p class="ml-3">{props.user.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}