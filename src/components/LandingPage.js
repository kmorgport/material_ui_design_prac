import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow'

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles( theme => ({
        animation: {
            madWidth: "50em",
            minWidth: "21em",
            marginTop: "2em",
            marginLeft: "10%",
            [theme.breakpoints.down("sm")]: {
                maxWidth: "30em"
            }
        },
        estimateButton: {
            ...theme.typography.estimate,
            backgroundColor: theme.palette.common.orange,
            borderRadius: 50,
            height: 45,
            width: 145,
            marginRight: 40,
            "&:hover": {
                backgroundColor: theme.palette.secondary.light
            }
        },
        buttonContainer: {
            marginTop: "1em",
        },
        learnButtonHero: {
            borderColor: theme.palette.common.blue,
            color: theme.palette.common.blue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "0.9rem",
            height: 45,
            width: 145
        },
        mainContainer: {
            marginTop: "5em",
            [theme.breakpoints.down("md")]: {
                marginTop: "3em"
            },
            [theme.breakpoints.down("xs")]: {
                marginTop: "2em"
            }
        },
        heroTextContainer: {
            minWidth: "21.5em",
            marginLeft: "1em",
            [theme.breakpoints.down("xs")]:{
                marginLeft: 0
            }
        }
}))

const LandingPage  = () => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item>{/*-----Hero Block-----*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item >
                        <Typography variant="h2" align="center">Bringing West Coast Technology to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="container">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero}>
                                    <span style={{ marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>

                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.animation} sm item>
                        <Lottie 
                            options={defaultOptions} 
                            height={"100%"} 
                            width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*---Services Block---*/}
                <Grid container direction="row">
                    <Grid item>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1">
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digital Solutions, from investigation to{" "} <span>celebration</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
    
}

export default LandingPage