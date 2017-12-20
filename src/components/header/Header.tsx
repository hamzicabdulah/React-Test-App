import * as React from 'react';
import { StatelessComponent } from 'react';
import { headerDiv, logo } from '../../styles/Header';

export const Header: StatelessComponent = () => {
    return (
        <div style={headerDiv}>
            <img src='img/logo.png' style={logo}></img>
        </div>
    );
}