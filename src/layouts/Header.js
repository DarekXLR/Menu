import React from 'react';
import img1 from '../images/chicago.jpg'
import img2 from '../images/kuala.jpg'
import img3 from '../images/paris.jpg'
import img4 from '../images/town.jpg'

import "../styles/Header.css"
import { Route, Switch } from 'react-router-dom'

const Header = () => {

    return (
        <>

            <Switch>
                <Route path="/products" render={() => (
                    <img src={img1} alt="chicago" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img2} alt="kuala" />
                )} />
                <Route path="/" exact render={() => (
                    <img src={img3} alt="paris" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img4} alt="town" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="town" />
                )} />
            </Switch>

        </>

    );
}

export default Header;