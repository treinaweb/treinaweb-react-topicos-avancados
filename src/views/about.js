import React from 'react';
import { Route, Link } from 'react-router-dom';

import Address from './about/address';
import Contact from './about/contact';

const About = (props) => {
    const match = props.match;
    return (
        <div>
            <h1>About</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`${match.url}/address`} >Address</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/contact`} >Contact</Link>
                    </li>
                </ul>
            </nav>
            <Route path={`${match.path}/address`} exact component={Address} />
            <Route path={`${match.path}/contact`} component={Contact} />
        </div>
    );
}

export default About;