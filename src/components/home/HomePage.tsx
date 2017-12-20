import * as React from 'react';
import { StatelessComponent } from 'react';
import { plansContainer, plansHeadingTablet, plansHeadingMobile, footer, plansContainerMobile, footerDesktop, footerChildDesktop } from '../../styles/HomePage';
import { Plan } from './Plan';
import { RaisedButton } from 'material-ui';
import { GetStartedBtn } from './GetStartedBtn';
import { Benefits } from './Benefits';
import { FreeAccBtn } from './FreeAccBtn';
import Responsive from 'react-responsive';

const Tablet: StatelessComponent<any> = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile: StatelessComponent<any> = props => <Responsive {...props} maxWidth={767} />;
const Desktop: StatelessComponent<any> = props => <Responsive {...props} minWidth={992} />;

export const HomePage: StatelessComponent<any> = () => {
    return (
        <div>
            <Tablet>
                <h2 style={plansHeadingTablet}>Choose a Plan, Then Let's Get Started</h2>
                <div style={plansContainer}>
                    <Plan save={true} discountPercentage={20} monthlyCostInUsd={16.65} billingType='Quarterly' />
                    <Plan save={true} discountPercentage={50} monthlyCostInUsd={12.96} billingType='Monthly' />
                    <Plan lowRate={true} monthlyCostInUsd={24.95} billingType='Semi-Annual' />
                </div>
                <div style={footer}>
                    <GetStartedBtn />
                    <Benefits />
                    <FreeAccBtn />
                </div>
            </Tablet>

            <Mobile>
                <h2 style={plansHeadingMobile}>Choose a Plan</h2>
                <div style={plansContainerMobile}>
                    <Plan save={true} discountPercentage={20} monthlyCostInUsd={16.65} billingType='Quarterly' />
                    <Plan save={true} discountPercentage={50} monthlyCostInUsd={12.96} billingType='Monthly' />
                    <Plan lowRate={true} monthlyCostInUsd={24.95} billingType='Semi-Annual' />
                </div>
                <div style={footer}>
                    <GetStartedBtn />
                    <Benefits />
                    <FreeAccBtn />
                </div>
            </Mobile>

            <Desktop>
                <h2 style={plansHeadingTablet}>Choose a Plan, Then Let's Get Started</h2>
                <div style={plansContainer}>
                    <Plan save={true} discountPercentage={20} monthlyCostInUsd={16.65} billingType='Quarterly' />
                    <Plan save={true} discountPercentage={50} monthlyCostInUsd={12.96} billingType='Monthly' />
                    <Plan lowRate={true} monthlyCostInUsd={24.95} billingType='Semi-Annual' />
                </div>
                <div style={footerDesktop}>
                    <div style={footerChildDesktop}>
                        <Benefits />
                    </div>
                    <div style={footerChildDesktop}>
                        <GetStartedBtn />
                        <FreeAccBtn />
                    </div>
                </div>
            </Desktop>
        </div>
    );
}