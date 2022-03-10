import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme} from '@material-ui/core/styles'
import { Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';


import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg'


const useStyles = makeStyles( theme =>({
    mainContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em"
    },
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    }
}))

const CustomSoftware = ({setSelectedIndex, setValue}) => {
    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row">
                <Grid 
                    item 
                    className={classes.arrowContainer} 
                    style={{
                        marginRight: "1em", 
                        marginLeft: "-3.5em" 
                        }}
                >
                    <IconButton 
                        onClick={()=> setSelectedIndex(0) }
                        component={Link}
                        to="/services"
                        style={{ backgroundColor: "transparent"}}>
                        <img src={backArrow} alt="Back to Services Page"/>
                    </IconButton>
                </Grid>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2">Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Watermelon peaches apples and ice cream with a side of spicy fries.
                            Watermelon peaches apples and ice cream with a side of spicy fries.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don’t need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.arrowContainer}>
                    <IconButton 
                        onClick={()=> setSelectedIndex(2) }
                        style={{ backgroundColor: "transparent"}}
                        component={Link}
                        to="/mobileapps"
                    >
                        <img src={forwardArrow} alt="forward to iOS/Android App dev page"/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction="row">
                <Grid item container direction="column">
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware