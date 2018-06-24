import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header nav-section">
            <img src={props.logo} alt="App-logo" />
        </header>
    );
};

export default Header;