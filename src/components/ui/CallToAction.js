import React from 'react';
import {Grid, Typography, Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ButtonArrow from './ButtonArrow';

import { useMediaQuery } from '@material-ui/core';
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles( theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "60em",
            width: "100%",
            [theme.breakpoints.down("md")]: {
                backgroundImage: `url(${mobileBackground})`,
                backgroundAttachment: "inherit"
            }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 25,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginLeft: "2em",
        marginRight: "5em",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0
        }
    }
}))

const CallToAction = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid 
            container 
            alignItems="center" 
            justify={matchesSM ? "center" : "space-between"}
            className={classes.background}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid 
                item 
                style={{marginLeft: matchesSM ? 0 :"5em", 
                textAlign: matchesSM ? "center" : "inherit"}}
            >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software.<br/> Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5"}}>
                            Take advantage of the 21st century.
                        </Typography>
                        <Grid container item justify={matchesSM ? "center" : undefined} >
                            <Button 
                                variant="outlined" 
                                style={{color: "white", borderColor: "white"}}
                                className={classes.learnButton}
                            >
                                <span style={{ marginRight: 5}}>Learn More</span>
                                <ButtonArrow 
                                    width={10} 
                                    height={10} 
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="combined" className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>
            <div className={classes.background} />
        </Grid>
    )
}

export default CallToAction