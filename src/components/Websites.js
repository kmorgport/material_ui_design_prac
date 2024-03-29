import react from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, IconButton, Typography, useMediaQuery, Hidden} from '@material-ui/core'


import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg'
import eCommerce from '../assets/ecommerce.svg'
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
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
    paragraphContainer: {
        maxWidth: "30em"
    }
}))

const Websites = ({ setValue, setSelectedIndex}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

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
                            onClick={()=> setSelectedIndex(2) }
                            component={Link}
                            to="/mobileapps"
                            style={{ backgroundColor: "transparent"}}>
                            <img src={backArrow} alt="Back to iOS/Android Development"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography
                            variant="h2"
                            align={matchesMD ? "center" : undefined }
                        >
                            Website Development Page
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined } variant="body1" paragraph>
                            Having a website is a necessity in today’s business world. They
                            give you one central, public location to let people know who you
                            are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined } variant="body1" paragraph>
                            From simply having your hours posted to having a full fledged
                            online store, making yourself as accessible as possible to users
                            online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton 
                            onClick={()=> setSelectedIndex(0) }
                            style={{ backgroundColor: "transparent"}}
                            component={Link}
                            to="/services"
                        >
                            <img src={forwardArrow} alt="Forward to the Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid 
                item container 
                direction={matchesSM ? "column" : "row" }
                className={classes.rowContainer} 
                alignItems="center"
                style={{ marginTop: "15em" }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img 
                                src={analytics} 
                                style={{ marginLeft: "-2.75em" }}
                                alt="graph with magnifying glass"/>
                        </Grid>
                    </Grid>            
                </Grid>
                <Grid item className={classes.paragraphContainer}> 
                    <Typography variant="body1" align={ matchesSM ? "center" : undefined}>
                        Knowledge is power, and data is 21st Century gold. Analyzing this
                        data can reveal hidden patterns and trends in your business,
                        empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid 
                item container 
                direction={matchesSM ? "column" : "row" }
                justify="flex-end"
                className={classes.rowContainer} 
                alignItems="center"
                style={{marginBottom: "15em", marginTop: "15em" }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img 
                                src={eCommerce} 
                                alt="Globe outline made of dollar signs"/>
                        </Grid>
                    </Grid>            
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer} >
                    <Typography 
                        variant="body1" 
                        align={ matchesSM ? "center" : undefined} 
                        paragraph
                    >
                        It’s no secret that people like to shop online.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        align={ matchesSM ? "center" : undefined} 
                        paragraph
                    >
                        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
                        for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid 
                item container 
                direction={matchesSM ? "column" : "row" }
                justify="flex-start"
                className={classes.rowContainer} 
                alignItems="center"
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img 
                                src={outreach} 
                                alt="megaphone"/>
                        </Grid>
                    </Grid>            
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        align={ matchesSM ? "center" : undefined}
                    >
                        Draw people in with a dazzling website. Showing off your products
                        online is a great way to help customers decide what’s right for them
                        before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid 
                item container 
                direction={matchesSM ? "column" : "row" }
                justify="flex-end"
                className={classes.rowContainer} 
                alignItems="center"
                style={{ marginTop: "15em", marginBottom: "15em"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine<br/>Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img 
                                src={seo} 
                                alt="website standing on winner's podium"/>
                        </Grid>
                    </Grid>            
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        align={ matchesSM ? "center" : undefined}
                    >
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        align={ matchesSM ? "center" : undefined}
                    >
                        If you’re like us, probably never.
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        align={ matchesSM ? "center" : undefined}
                    >
                        Customers don’t go there either, so we make sure your website is
                        designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}

export default Websites