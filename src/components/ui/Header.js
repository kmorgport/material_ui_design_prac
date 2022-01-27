import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Tabs, Tab, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { makeStyles } from "@material-ui/core";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    //   target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
      },
      logo:{
          height: "7em"
      },
      tabContainer:{
          marginLeft: 'auto'
      },
      tab:{
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px"
      },
      button: {
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",
      }
  }))


const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0)

    const handleChange = (e, value ) => {
        setValue(value)
    }

    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <img src={logo} className={classes.logo} alt="company logo"/>
                    <Tabs value={value} 
                    className={classes.tabContainer} 
                    onChange={handleChange}
                    indicatorColor="primary"
                    >
                        <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                        <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
                        <Tab className={classes.tab} component={Link} to="revolution" label="The Revolution"/>
                        <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
                        <Tab className={classes.tab} component={Link} to="contact" label="Contact Us"/>
                    </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Free Estimate
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}

export default Header