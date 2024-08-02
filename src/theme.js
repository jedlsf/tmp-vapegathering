// src/theme.js
const theme = {
    typography: {
        fonts: {
            thin: "'Akkordeon Thin', sans-serif",
            extralight: "'Akkordeon ExtraLight', sans-serif",
            light: "'Akkordeon Light', sans-serif",
            regular: "'Akkordeon Regular', sans-serif",
            medium: "'Akkordeon Medium', sans-serif",
            semibold: "'Akkordeon SemiBold', sans-serif",
            bold: "'Akkordeon Bold', sans-serif",
            extrabold: "'Akkordeon ExtraBold', sans-serif",
            black: "'Akkordeon Black', sans-serif",
            thinItalic: "'Akkordeon Thin Italic', sans-serif",
            extralightItalic: "'Akkordeon ExtraLight Italic', sans-serif",
            lightItalic: "'Akkordeon Light Italic', sans-serif",
            regularItalic: "'Akkordeon Regular Italic', sans-serif",
            mediumItalic: "'Akkordeon Medium Italic', sans-serif",
            semiboldItalic: "'Akkordeon SemiBold Italic', sans-serif",
            boldItalic: "'Akkordeon Bold Italic', sans-serif",
            extraboldItalic: "'Akkordeon ExtraBold Italic', sans-serif",
            blackItalic: "'Akkordeon Black Italic', sans-serif",
        },
        sizes: {
            header: '2em',
            body: '0.8em',
            title: '1.5em',
            helper: '0.7em',
            hint: "0.75em",
            subject: '1em',
            mini: "0.45em",
        },
        weights: {
            header: 700,
            body: 400,
            title: 500,
            subject: 600,
            light: 350,
        },
        lineHeights: {
            body: '1.5',
            heading: '1.2'
        },
        letterSpacing: {
            body: '0.02em',
            heading: '0.01em'
        }
    },
    colors: {
        primary: '#0063bc',
        error: '#e25836',
        textPrimary: '#f5f3ef',
        textSecondary: '#ede9e1',
        primaryBackground: '#171717',
        secondaryBackground: '#272727',
        brand: {
            red: '#b13610',
            blue: '#0063bc',
            green: '#70ac1f',
            yellow: '#f3dc00',
            purple: '#af60ab',
            pink: '#ec9eff',
            orange: '#ff6109'

        }
    },
    spacing: {
        tight: '0.2rem',
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
        xlarge: '4rem'
    },
    borders: {
        width: {
            thin: '1px',
            medium: '2px',
            thick: '4px'
        },
        radius: {
            small: '4px',
            medium: '6px',
            large: '16px'
        },
        color: {
            primary: '#d6f500',
            secondary: '#1e2021'
        }
    },
    shadows: {
        small: '0 1px 3px rgba(0, 0, 0, 0.12)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.16)',
        large: '0 10px 20px rgba(0, 0, 0, 0.24)'
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1200px'
    },
    zIndex: {
        modal: 1000,
        dropdown: 500,
        tooltip: 200
    },
    animations: {
        duration: {
            short: '200ms',
            medium: '400ms',
            long: '600ms'
        },
        easing: {
            easeIn: 'cubic-bezier(0.5, 0, 0.5, 1)',
            easeOut: 'cubic-bezier(0, 0, 0.5, 1)',
            easeInOut: 'cubic-bezier(0.5, 0, 0.5, 1)'
        }
    },
    iconSizes: {
        small: '16px',
        medium: '24px',
        large: '32px',
        xlarge: '48px'
    }
};

export default theme;
