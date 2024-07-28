// src/theme.js
const theme = {
    typography: {
        fonts: {
            thin: "'Poppins-Thin', sans-serif",
            extralight: "'Poppins-ExtraLight', sans-serif",
            light: "'Poppins-Light', sans-serif",
            regular: "'Poppins-Regular', sans-serif",
            medium: "'Poppins-Medium', sans-serif",
            semibold: "'Poppins-SemiBold', sans-serif",
            bold: "'Poppins-Bold', sans-serif",
            extrabold: "'Poppins-ExtraBold', sans-serif",
            black: "'Poppins-Black', sans-serif",
            thinItalic: "'Poppins-Thin-Italic', sans-serif",
            extralightItalic: "'Poppins-ExtraLight-Italic', sans-serif",
            lightItalic: "'Poppins-Light-Italic', sans-serif",
            regularItalic: "'Poppins-Regular-Italic', sans-serif",
            mediumItalic: "'Poppins-Medium-Italic', sans-serif",
            semiboldItalic: "'Poppins-SemiBold-Italic', sans-serif",
            boldItalic: "'Poppins-Bold-Italic', sans-serif",
            extraboldItalic: "'Poppins-ExtraBold-Italic', sans-serif",
            blackItalic: "'Poppins-Black-Italic', sans-serif",
        },
        sizes: {
            header: '2em',
            body: '0.8em',
            title: '1.5em',
            helper: '0.7em',
            hint: "0.75em",
            subject: '1em'
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
        primary: '#061408',
        error: '#e25836',
        textPrimary: '#061408',
        textSecondary: '#95a1ac',
        primaryBackground: '#edf2d1',
        secondaryBackground: '#163119'
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
