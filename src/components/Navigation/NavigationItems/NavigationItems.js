import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={"NavigationItems"}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem /*link="/"*/ clicked={() => props.about()}>About game</NavigationItem>
        <NavigationItem link="/" >Contact us</NavigationItem>
        <NavigationItem link="/" >Share us</NavigationItem>
    </ul>
);

export default navigationItems;