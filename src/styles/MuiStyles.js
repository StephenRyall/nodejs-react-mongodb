import { makeStyles, createMuiTheme, withStyles } from "@material-ui/core/styles";
import { css } from '@emotion/core';
import TextField from '@material-ui/core/TextField';

export const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            underline: {
                "&&&&:hover:before": {
                    borderBottom: "1px solid rgb(175, 175, 175)"
                },
                "&&&&:hover:after": {
                    borderBottom: "1px solid rgb(255, 255, 255)"
                },
                "&&&&:after": {
                    borderBottom: "1px solid rgb(255, 255, 255)"
                },
                "&&&&:before": {
                    borderBottom: "1px solid rgb(175, 175, 175)"
                }
            }
        }
    }
});

export const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'grey'
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: 'grey'
        }
    }
})(TextField);


export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1),
        left: '32%'
    },
    button: {
        margin: theme.spacing(1),
        width: '100px !important',
        height: '25px',
        border: '1px solid #C00 !important',
        minWidth: 150,
    },
    input: {
        display: 'none',
        color: 'red'
    },
    tabRoot: {
        minWidth: 150,
    },
}));

export const editTheme = createMuiTheme({
    overrides: {
        MuiIconButton: {
            root: {
                '&:hover': {
                    backgroundColor: "grey"
                }
            }
        }
    }
});

export const editUseStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        color: '#F9F9F9'
    },
    table: {
        minWidth: 650,
        color: '#F9F9F9'
    },
    tableCell: {
        color: "#F9F9F9"
    },
    tableHead: {
        position: 'sticky',
        top: 0
    },
    close: {
        padding: theme.spacing(0.5),
    },
    fab: {
        margin: theme.spacing(1)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: "grey"
    }
}));


export const ModulesUseStyles = makeStyles(theme => ({
    root: {
        width: '140%',
        overflowX: 'auto',
        color: '#F9F9F9'
    },
    table: {
        minWidth: 650,
        color: '#F9F9F9'
    },
    tableCell: {
        color: "#F9F9F9"
    },
    tableHead: {
        position: 'sticky',
        top: 0
    },
    fab: {
        margin: theme.spacing(1),

    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: "grey"
    }
}));

export const avgScoreUseStyles = makeStyles(theme => ({
    root: {
        width: '110%',
        background: "#F9F9F9",
        color: "#F9F9F9",
        fontSize: 14,
        border: '1px solid #F9F9F9 !important'
    },
    tableWrapper: {
        maxHeight: 800,
        overflowY: 'scroll',
        overflowX: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 2000,
        background: '#F9F9F9',
        fontSize: 14,
        color: '#F9F9F9'
    },
    dropdownStyle:
    {
        border: "1px solid black",
        borderRadius: "5%",
        backgroundColor: 'lightgrey',
    },
    input: {
        color: "#F9F9F9",
        type: "text !important"
    },
    underline: {
        '&:after': {
            borderBottom:'2px solid red',
          }
    }
}));

export const tcModalStyle = {
    content: {
        outline: "none",
        backgroundColor: "#F9F9F9",
        width: "100%",
        height: "100%",
        maxHeight: 460,
        maxWidth: 790,
        overflow: 'none',
        border: "0.1rem solid #888888",
        boxShadow: "0.5rem 1rem 1rem #888888",
        margin: "auto",
        textAlign: "center",
        color: 'black'
    }
};

export const cuModalStyle = {
    content: {
        outline: "none",
        backgroundColor: "#F9F9F9",
        width: "100%",
        height: "100%",
        maxHeight: 380,
        maxWidth: 790,
        overflow: 'none',
        border: "0.1rem solid #888888",
        boxShadow: "0.5rem 1rem 1rem #888888",
        margin: "auto",
        textAlign: "center",
        color: 'black'
    }
};

export const policyModalStyle = {
    content: {
        outline: "none",
        backgroundColor: "#F9F9F9",
        width: "100%",
        height: "100%",
        maxHeight: 250,
        maxWidth: 790,
        overflow: 'none',
        border: "0.1rem solid #888888",
        boxShadow: "0.5rem 1rem 1rem #888888",
        margin: "auto",
        textAlign: "center",
        color: 'black'
    }
};

export const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;