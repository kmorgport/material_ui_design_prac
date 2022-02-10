import React from 'react';
import {makeStyles}  from '@material-ui/core'

const useStyles = makeStyles( theme =>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%"
    }
}))

const Footer = () =>{
    const classes = useStyles();

    return (
        <footer className={classes.footer}>Thing</footer>
    )
}
export default Footer