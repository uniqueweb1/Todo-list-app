import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My Todo list</h1>
        </header>
    )
}

const headerStyle = {
    background : 'rgb(110, 216, 163)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header;