import { CSSProperties } from 'react';

export const plansContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto 40px'
}

export const plansContainerMobile: CSSProperties = {
    ...plansContainer,
    transform: 'scale(.52, .52)',
    margin: '-50px auto -20px'
}

const plansHeading: CSSProperties = {
    textAlign: 'center',
}

export const plansHeadingTablet: CSSProperties = {
    ...plansHeading,
    font: 'normal normal 24px Rubik, sans-serif',
    margin: '40px auto'
    
}

export const plansHeadingMobile: CSSProperties = {
    ...plansHeading,
    font: 'bold normal 18px Rubik, sans-serif',
    margin: '20px auto'
    
}

const btn: CSSProperties = {
    borderRadius: '25px',
    color: 'white'
}

export const btnTablet: CSSProperties = {
    ...btn,
    height: '50px',
    padding: '0 50px'
}

export const btnMobile: CSSProperties = {
    ...btn,
    padding: '0 100px'
}

export const btnDesktop: CSSProperties = {
    ...btnTablet,
    marginTop: '30px'
}

export const btnLabel: CSSProperties = {
    textTransform: 'capitalize'
}

export const footer: CSSProperties = {
    margin: '0 auto',
    textAlign: 'center'
}

export const footerDesktop: CSSProperties = {
    ...footer,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px'
}

export const footerChildDesktop: CSSProperties = {
    margin: '0 50px'
}