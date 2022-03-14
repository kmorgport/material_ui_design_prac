import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery, Hidden, IconButton } from '@material-ui/core'

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'

import integrationAnimation from '../animations/integrationAnimation/data.json'
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles( theme => ({
    rowContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
}))

const MobileApps = ({ setValue, setSelectedIndex }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Grid container direction="column">
            <Grid 
                item 
                container 
                direction="row"
                justify={matchesMD ? "center" : undefined }
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? "1em" : "2em" }}
            >
                <Hidden mdDown>
                    <Grid 
                        item 
                        className={classes.arrowContainer} 
                        style={{
                            marginRight: "1em", 
                            marginLeft: "-3.5em" 
                            }}
                    >
                        <IconButton 
                            onClick={()=> setSelectedIndex(1) }
                            component={Link}
                            to="/customsoftware"
                            style={{ backgroundColor: "transparent"}}>
                            <img src={backArrow} alt="Back to Custom Software Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography
                            variant="h2"
                            align={matchesMD ? "center" : undefined }
                        >
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined } variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined } variant="body1" paragraph>
                            Whether you want an app for your customers, employees, or
                            yourself, we can build cross-platform native solutions for any
                            part of your business process. This opens you up to a whole new
                            world of possibilities by taking advantage of phone features like
                            the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined } variant="body1" paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            onClick={()=> setSelectedIndex(3) }
                            style={{ backgroundColor: "transparent"}}
                            component={Link}
                            to="/websites"
                        >
                            <img src={forwardArrow} alt="Custom Website Development"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid 
                item 
                container 
                direction={ matchesSM ? "column" : "row" } 
                style={{ marginTop: "15em", marginBottom:"15em" }}
                className={classes.rowContainer}
            >
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined } variant="h4" gutterBottom>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined } variant="body1" paragraph>
                            Our technology enables an innate interconnection between web and
                            mobile applications, putting everything you need right in one
                            convenient place.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined } variant="body1" paragraph>
                            This allows you to extend your reach, reinvent interactions, and
                            develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "20em"}} />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right" }  variant="h4" gutterBottom>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right" } variant="body1" paragraph>
                            Our cutting-edge development process allows us to create apps for
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right" } variant="body1" paragraph>
                            This significantly reduces costs and creates a more unified brand
                            experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                item 
                container 
                direction={ matchesMD ? "column" : "row" } 
                className={classes.rowContainer}
                style={{ marginBottom: "15em" }}
            >
                <Grid alignItems="center" item container direction="column" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife"/>
                    </Grid>
                </Grid>
                <Grid 
                    alignItems="center" 
                    item container md
                    direction="column"
                    style={{ marginTop: matchesMD ? "10em" : 0, 
                             marginBottom: matchesMD ? "10em" : 0
                }}
                >
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off-sign" style={{ maxWidth: matchesXS ? "20em" : "28em" }}/>
                    </Grid>
                </Grid>
                <Grid alignItems="center" item container direction="column" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}

export default MobileApps