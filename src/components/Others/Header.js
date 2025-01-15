import React from 'react'

function Header({data}) {

    function handleLogout() {
        localStorage.setItem('loggedInUser' , '');
        window.location.reload();
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br/> <span className='3xl font-semibold'>{data.name}</span> </h1>
            <button onClick={handleLogout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
        </div>
        
    )
}

export default Header
