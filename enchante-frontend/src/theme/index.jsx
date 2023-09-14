import { createTheme, hexToRgb, outlinedInputClasses } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FCFCFC",
        },
        secondary: {
            main: "#FFACC7",
            light: "#FFACC740",
            dark: "#FF8DC7",
        },
        tertiary: {
            main: "#FFDDD2",
            light: "#FFDDD240",
        },
        quaternary: {
            main: "#FFF2EE",
        },
        quinary: {
            main: "#383838",
            light: "#38383840",
        },
        senary: {
            main: "#605E5B",
        },
    },

    typography: {
        allVariants: {
            color: "#383838",
        },
        h1: {
            fontFamily: "Yeseva One",
            fontSize: "3rem",
            // fontWeight: "bold",
        },
        h2: {
            fontFamily: "Yeseva One",
            fontSize: "2rem",
            // fontWeight: "bold",
        },
        h3: {
            fontFamily: "Yeseva One",
            fontSize: "1.5rem",
            // fontWeight: "bold",
        },
        body1: {
            fontFamily: "Josefin Sans",
            fontSize: "1rem",
        },
        body2: {
            fontFamily: "Josefin Sans",
            fontSize: "0.8rem",
        },
        button: {
            fontFamily: "Josefin Sans",
            fontSize: "1rem",
            // fontWeight: "bold",
        },
    },
});

theme.palette = {
    ...theme.palette,
    background: {
        default: theme.palette.primary.main,
        paper: theme.palette.primary.main,
    },
};

theme.components = {
    ...theme.components,
    MuiButton: {
        styleOverrides: {
            contained: {
                my: "2rem",
                padding: "0.9rem 5rem",
                borderRadius: "0.75rem",
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.main,
                boxShadow: `2px 2px 4px ${hexToRgb(
                    theme.palette.secondary.light ?? "#0"
                )}`,

                "&:hover": {
                    boxShadow: `2px 2px 4px ${hexToRgb(
                        theme.palette.secondary.main + "80"
                    )}`,
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                },
            },
            text: {
                padding: "0.9rem 1rem",
                color: theme.palette.quinary.main,

                "&:hover": {
                    color: theme.palette.secondary.dark,
                    borderRadius: "0rem",
                    borderBottom: "2px solid" + theme.palette.secondary.dark,
                },
            },
            outlined: {
                my: "2rem",
                padding: "0.9rem 5rem",
                borderRadius: "0.75rem",
                color: theme.palette.secondary.main,
                outline: "3px solid" + theme.palette.secondary.main,
                outlineOffset: "-3px",
                boxShadow: `2px 2px 4px ${hexToRgb(
                    theme.palette.secondary.light ?? "#0"
                )}`,
                "&:hover": {
                    boxShadow: `2px 2px 4px ${hexToRgb(
                        theme.palette.secondary.main + "80"
                    )}`,
                    backgroundColor: theme.palette.secondary.light,
                    outline: "3px solid" + theme.palette.secondary.main,
                },
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                "--TextField-brandBorderColor": theme.palette.quinary.light,
                "--TextField-brandBorderHoverColor": theme.palette.quinary.main,
                "--TextField-brandBorderFocusedColor":
                    theme.palette.senary.main,
                backgroundColor: theme.palette.secondary.light,
                borderRadius: "0.5rem",
                "& label.Mui-focused": {
                    color: "var(--TextField-brandBorderFocusedColor)",
                },
            },
        },
        defaultProps: {
            InputProps: {
                disableUnderline: true,
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            notchedOutline: {
                borderColor: "var(--TextField-brandBorderColor)",
            },
            root: {
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: "var(--TextField-brandBorderHoverColor)",
                },
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: "var(--TextField-brandBorderFocusedColor)",
                },
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                background: theme.palette.quaternary.main,
                color: theme.palette.secondary.dark,
                boxShadow: `0px 1px 8px ${hexToRgb(
                    theme.palette.quinary.light ?? "#0"
                )}`,
            },
        },
    },

    // MuiPaper: {
    //     styleOverrides: {
    //         root: {
    //             backgroundColor: theme.palette.senary.main,
    //         },
    //     },
    // },
};

export default theme;
