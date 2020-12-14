import {lighten} from "polished";

const spacing = {
    xs: 10,
    sm: 15,
    xl: 30,
}

const minSectionHeight = '83vh';
const defaultShadow = '0 6px 8px rgba(0, 0, 0, 0.3)';

const fonts = {
    logo: "'Raleway', sans-serif",
    first: "'Montserrat', sans-serif",
}

export const lightTheme = {
    spacing: spacing,
    minSectionHeight: minSectionHeight,
    defaultShadow: defaultShadow,
    fonts: fonts,

    colors: {
        main: '#d9e4dd',
        secondary: '#c2beb8',
        foreground: '#cdc9c3',
        border: '#555555',
        contrast: '#555555',
        lightenContrast: lighten(0.08, '#555555'),
        text: '#313131',
        textSecondary: '#6b6b6b',
    },
}

export const darkTheme = {
    spacing: spacing,
    minSectionHeight: minSectionHeight,
    defaultShadow: defaultShadow,
    fonts: fonts,

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
