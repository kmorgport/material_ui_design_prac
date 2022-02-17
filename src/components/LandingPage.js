import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow'

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles( theme => ({

}))

const LandingPage  = () => {
    // const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item >
                        <Typography variant="h2" align="center"></Typography>
                        <Grid container>
                            <Grid item>
                                <Button variant="container">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">
                                    Learn More
                                    <ButtonArrow width={15} height={15} fill="red"/>

                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item>
                        <Lottie 
                            options={defaultOptions} 
                            height={"100%"} 
                            width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
    
}

export default LandingPage