import { CSSProperties } from 'react';

export const benefitsHeading: CSSProperties = {
    width: '384px',
    height: '43px',
    font: 'bold normal 36px Rubik, sans-serif',
    margin: '23px auto'
}

export const benefitsHeadingMobile: CSSProperties = {
    ...benefitsHeading,
    font: 'bold normal 20px Rubik, sans-serif',
    margin: '23px auto 0'
}

export const benefit: CSSProperties = {
    width: '323px',
    font: 'normal normal 16px Rubik, sans-serif',
    borderBottom: '1px solid #A9CAE1',
    margin: '0 auto',
    lineHeight: '25px'
}

export const benefitMobile: CSSProperties = {
    ...benefit,
    font: 'normal normal 12px Rubik, sans-serif'
}

export const fullSpan: CSSProperties = {
    fontWeight: 'bold',
    fontStyle: 'italic'
}

export const freeAccBtn: CSSProperties = {
    width: '250px',
    height: '29px',
    font: 'normal normal 12px Rubik, sans-serif',
    margin: '35px auto'
}

export const anchorTag: CSSProperties = {
    color: '#3878DE',
    textDecoration: 'none'
}