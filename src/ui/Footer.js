import React from 'react';

const Footer = (props) => {
    return (
        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2018 UBeer</p>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Privacidade</a></li>
                <li className="list-inline-item"><a href="#">Termos</a></li>
                <li className="list-inline-item"><a href="#">Suporte</a></li>
            </ul>
        </footer>
    );
};

export default Footer;