import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core';

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import ButtonArrow from '../components/ui/ButtonArrow'


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
    specialTest: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
}))

const Services = ({setValue, setSelectedIndex}) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid 
                item 
                style={{
                    marginLeft: matchesSM ? 0 : "5em",
                    marginTop: matchesSM ? "1em" : "2em"
                }}
            >
                <Typography 
                    align={matchesSM ? "center" : undefined }
                    variant="h2" 
                    gutterBottom
                    >Services</Typography>
            </Grid>
            <Grid item> {/*---iOS/Android Block---*/}
                <Grid container 
                    direction="row"  
                    justify={matchesSM ? "center" : "flex-end" } 
                    className={classes.serviceContainer}
                    style={{marginTop: matchesSM ? "1em" : "5em"}}
                >
                    <Grid 
                        item 
                        style={{ 
                        textAlign: matchesSM ? "center" : undefined ,
                        width: matchesSM ? undefined : "35em"
                    }}
                        >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            { matchesSM ? null : <br/> }with either mobile platform
                        </Typography>
                        <Button 
                            variant="outlined" 
                            component={Link}
                            to="/mobileapps"
                            className={classes.learnButton}
                            onClick={()=>{setValue(1); setSelectedIndex(2)}}
                        >
                            <span style={{ marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10}
                                fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid 
                        item
                        style={{marginRight: matchesSM ? 0 : "5em"}}
                    >
                        <img 
                            className={classes.icon} 
                            alt="custom software icon"
                            src={mobileAppIcon} 
                            width="250em"
                            />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*---Custom Software Block---*/}
                <Grid container 
                    direction="row"  
                    justify={matchesSM ? "center" : undefined } 
                    className={classes.serviceContainer}
                >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digital Solutions, from investigation to{" "} 
                            <span className={classes.specialTest}>celebration</span>
                        </Typography>
                        <Button
                            variant="outlined" 
                            className={classes.learnButton}
                            component={Link}
                            to="/customsoftware"
                            onClick={()=>{setValue(1); setSelectedIndex(1)}}
                        >
                            <span style={{ marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10}
                                fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img 
                        className={classes.icon} 
                        alt="custom software icon" 
                        src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*---Websites Block---*/}
                <Grid 
                    container 
                    direction="row"  
                    justify={matchesSM ? "center" : "flex-end" } 
                    className={classes.serviceContainer}
                    style={{marginBottom: "10em"}}
                >
                    <Grid 
                        item 
                        style={{ 
                        textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM ? undefined : "35em"
                    }}
                    >
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            className={classes.learnButton}
                            component={Link}
                            to="/websites"
                            onClick={()=>{setValue(1); setSelectedIndex(3)}}
                        >
                            <span style={{ marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10}
                                fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid 
                        item
                        style={{marginRight: matchesSM ? 0 : "5em",}}
                    >
                        <img 
                            className={classes.icon} 
                            alt="custom software icon" 
                            src={websitesIcon} 
                            width="250em"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services