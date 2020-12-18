import {lighten} from "polished";

const spacing = {
    xs: 10,
    sm: 15,
    xl: 30,
}

const minSectionHeight = 'calc(90vh - 50px)';
const defaultShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';

const fonts = {
    logo: "'Raleway', sans-serif",
    first: "'Montserrat', sans-serif",
}


// RWD
const size = {
    mobileS: '321px',
    mobileM: '376px',
    mobileL: '426px',
    tablet: '769px',
    laptop: '1025px',
    laptopL: '1441px',
    desktop: '2561px'
}

const device = {
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    tablet: `max-width: ${size.tablet}`,
    laptop: `max-width: ${size.laptop}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktop: `max-width: ${size.desktop}`,
};
// END RWD


const theme = {
    device: device,
    spacing: spacing,
    minSectionHeight: minSectionHeight,
    defaultShadow: defaultShadow,
    fonts: fonts,
}

export const lightTheme = {
    ...theme,
    colors: {
        main: '#d9e4dd',
        secondary: '#c2beb8',
        foreground: '#cdc9c3',
        border: '#555555',
        contrast: '#555555',
        lightenContrast: lighten(0.08, '#555555'),
        text: '#313131',
        textSecondary: '#565656',
    },
}

export const darkTheme = {
    ...theme,
    colors: {
        main: '#525252',
        secondary: '#414141',
        foreground: '#313131',
        border: '#313131',
        contrast: '#ca3e47',
        lightenContrast: lighten(0.07, '#ca3e47'),
        text: '#d9e4dd',
        textSecondary: '#909793',
    },
}
