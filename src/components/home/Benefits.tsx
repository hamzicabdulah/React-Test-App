import * as React from 'react';
import { StatelessComponent } from 'react';
import { benefitsHeading, benefitsHeadingMobile, benefit, fullSpan, benefitMobile } from '../../styles/benefits';
import Responsive from 'react-responsive';

const Tablet: StatelessComponent<any> = props => <Responsive {...props} minWidth={768} />;
const Mobile: StatelessComponent<any> = props => <Responsive {...props} maxWidth={767} />;

export const Benefits: StatelessComponent<any> = () => {
    return (
        <div>
            <Tablet>
                <h1 style={benefitsHeading}>Here's What You Get...</h1>
                <div>
                    <p style={benefit}>Unlimited Messages to Other Members</p>
                    <p style={benefit}>Unlimited Photo Uploads</p>
                    <p style={benefit}>View <span style={fullSpan}>Full</span> Member Profiles</p>
                    <p style={benefit}>Advanced Searching</p>
                    <p style={benefit}>Unlimited Icebreakers</p>
                </div>
            </Tablet>
            <Mobile>
                <h1 style={benefitsHeadingMobile}>Here's What You Get...</h1>
                <div>
                    <p style={benefitMobile}>Unlimited Messages to Other Members</p>
                    <p style={benefitMobile}>Unlimited Photo Uploads</p>
                    <p style={benefitMobile}>View <span style={fullSpan}>Full</span> Member Profiles</p>
                    <p style={benefitMobile}>Advanced Searching</p>
                    <p style={benefitMobile}>Unlimited Icebreakers</p>
                </div>
            </Mobile>
        </div>
    );
}