// export a navigation component (use react-router-dom)

import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../App-routes.constants';
import { NAV } from './navigation.styled';




const ReaderNavigation = (routes) => {
    return routes.map((route, index) => {
        return <NavLink key={index} to={route.path} activeClassName="active">{route.name}</NavLink>
    });
}

const Navigation = (props) => {
    return (
        <NAV>
            {ReaderNavigation(Routes)}
        </NAV>
    );
}

export default Navigation;