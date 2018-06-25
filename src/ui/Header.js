import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header p-5 bg-warning text-dark" style={{}}>
            <img src={props.logo} alt="App-logo" />
        </header>
    );
};

export default Header;