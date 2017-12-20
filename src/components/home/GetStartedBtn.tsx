import * as React from 'react';
import { StatelessComponent } from 'react';
import { btnTablet, btnMobile, btnLabel, btnDesktop } from '../../styles/HomePage';
import { FlatButton } from 'material-ui';
import Responsive from 'react-responsive';

const Tablet: StatelessComponent<any> = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile: StatelessComponent<any> = props => <Responsive {...props} maxWidth={767} />;
const Desktop: StatelessComponent<any> = props => <Responsive {...props} minWidth={992} />;

export const GetStartedBtn: StatelessComponent<any> = () => {
    return (
        <div>
            <Tablet>
                <FlatButton backgroundColor='#f21a64' label='Get Started' labelStyle={btnLabel} style={btnTablet} hoverColor='#f25c8f' rippleColor='#9b0d3e' />
            </Tablet>
            <Mobile>
                <FlatButton backgroundColor='#f21a64' label='Get Started' labelStyle={btnLabel} style={btnMobile} hoverColor='#f25c8f' rippleColor='#9b0d3e' />
            </Mobile>
            <Desktop>
                <FlatButton backgroundColor='#f21a64' label='Get Started' labelStyle={btnLabel} style={btnDesktop} hoverColor='#f25c8f' rippleColor='#9b0d3e' />
            </Desktop>
        </div>
    );
}