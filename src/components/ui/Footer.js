import React from 'react';
import {makeStyles}  from '@material-ui/core'
import { Link } from 'react-router-dom'

import  { Grid } from '@material-ui/core'

import footerAdornment from '../../assets/Footer Adornment.svg'
import { VerticalAlignBottom } from '@material-ui/icons';

const useStyles = makeStyles( theme =>({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative "
    },
    adornment: {
        width:"25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    }
}))

const Footer = ({value, setValue, selectedIndex, setSelectedIndex}) =>{
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>setValue(0)} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>{setValue(1); setSelectedIndex(0)}} to="/services" className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} onClick={()=>{setValue(1); setSelectedIndex(1)}} to="/customsoftware" className={classes.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} onClick={()=>{setValue(1); setSelectedIndex(2)}} to="/mobileapps" className={classes.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} onClick={()=>{setValue(1); setSelectedIndex(3)}} to="/websites" className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>setValue(2)} to="/revolution" className={classes.link}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} onClick={()=>setValue(2)} to="/revolution" className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item component={Link} onClick={()=>setValue(2)} to="/revolution" className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item component={Link} onClick={()=>setValue(2)} to="/revolution" className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>setValue(3)} to="/about" className={classes.link}>
                            About Us
                        </Grid>
                        <Grid item component={Link} onClick={()=>setValue(3)} to="/about" className={classes.link}>
                            History
                        </Grid>
                        <Grid item component={Link} onClick={()=>setValue(3)} to="/about" className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={()=>setValue(4)} to="/contact">
                                Contact Us
                            </Grid>
                        </Grid>
                 </Grid>
            </Grid>
            <img alt="black decoration slash" src={footerAdornment} className={classes.adornment}/>
        </footer>
    )
}
export default Footer