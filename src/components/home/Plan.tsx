import * as React from 'react';
import { StatelessComponent } from 'react';
import { Card, CardText } from 'material-ui';
import { plan, saveStyle, percentage, monthlyCost, billing, lowRateStyle, lowSpan } from '../../styles/plan';

interface IProps {
    save?: boolean;
    lowRate?: boolean;
    discountPercentage?: number;
    monthlyCostInUsd: number;
    billingType: string;
}

export const Plan: StatelessComponent<IProps> = ({ save, lowRate, discountPercentage, monthlyCostInUsd, billingType }) => {
    return (
        <Card style={plan}>
            <CardText>
                {save && <p style={saveStyle}>Save</p>}
                {discountPercentage && <h1 style={percentage}>{discountPercentage}%</h1>}
                {lowRate && <p style={lowRateStyle}><span style={lowSpan}>Low</span> Monthly Rate</p>}
                <h2 style={monthlyCost}>${monthlyCostInUsd} per month</h2>
                <p style={billing}>{billingType} Billing</p>
            </CardText>
        </Card>
    );
}