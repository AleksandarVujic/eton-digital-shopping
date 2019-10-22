import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <img src="https://www.etondigital.com/wp-content/themes/etondigital/img/logo.svg"
                    width="150px" alt="EtonDigitalShopping" className="navbar-brand ml-5" />
            </Link>

            <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-light">Shop</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item"></a>
                            <div className="dropdown-divider"></div>

                            <Link to="/shoppingCart" className="checkout-button">Go to Checkout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navigation;
