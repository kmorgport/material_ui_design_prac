import React, {useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core'
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
          height: "8em"
      },
      logoContainer:{
        padding: "0",
        "&:hover": {
            backgroundColor: "transparent"
        }
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
      },
      menu: {
          backgroundColor: theme.palette.common.blue,
          color: "white",
          borderRadius: "0px"
      },
      menuItem: {
          ...theme.typography.tab,
          opacity: 0.7,
          "&:hover": {
              opacity: 1
          }
      }
  }))


const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl ] = useState(null);
    const [ open, setOpen ] = useState(false)
    const [ selectedIndex, setSelectedIndex ] = useState()

    const handleChange = (e, value ) => {
        setValue(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTrigger)
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    const menuOptions = [
        {name: "Services", link:"/services"},
        {name: "Custom Software Developments", link:"/customSoftware"},
        {name: "Mobile App Development", link:"/mobileApps"},
        {name: "Website Developments", link:"/websites"},
    ]

    useEffect(()=>{
        if(window.location.pathname === "/" && value !== 0){
            setValue(0)
        }
    }, [value])

    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button className={classes.logoContainer} onClick={()=>setValue(0)} component={Link} to="/">
                    <img src={logo} className={classes.logo} alt="company logo"/>
                    </Button>
                    <Tabs value={value} 
                    className={classes.tabContainer} 
                    onChange={handleChange}
                    indicatorColor="primary"
                    >
                        <Tab 
                            className={classes.tab} 
                            component={Link} 
                            to="/" 
                            label="Home"
                        />
                        <Tab 
                            aria-owns={anchorEl ? "simple-menu" : undefined }
                            aria-haspopup={anchorEl ? "true" : undefined}
                            className={classes.tab} 
                            component={Link} 
                            onMouseOver={event => handleClick(event)}
                            to="/services" 
                            label="Services"
                        />
                        <Tab 
                            className={classes.tab} 
                            component={Link} 
                            to="revolution" 
                            label="The Revolution"
                        />
                        <Tab 
                            className={classes.tab} 
                            component={Link} 
                            to="/about" 
                            label="About Us"
                        />
                        <Tab 
                            className={classes.tab} 
                            component={Link} 
                            to="contact" 
                            label="Contact Us"
                        />
                    </Tabs>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Free Estimate
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        classes={{paper: classes.menu}}
                        MenuListProps={{onMouseLeave: handleClose}}
                        elevation={0}
                    >
                        <MenuItem 
                            onClick={()=> {handleClose(); setValue(1)}}
                            component={Link}
                            to="/services"
                            classes={{root: classes.menuItem}}
                            > 
                            Services
                        </MenuItem>
                        <MenuItem 
                            onClick={()=> {handleClose(); setValue(1)}}
                            component={Link}
                            to="/customSoftware"
                            classes={{root: classes.menuItem}}
                            > 
                            Custom Software Development
                        </MenuItem>
                        <MenuItem 
                            onClick={()=> {handleClose(); setValue(1)}}
                            component={Link}
                            to="/mobileApps"
                            classes={{root: classes.menuItem}}
                            > 
                            Mobile App Development
                        </MenuItem>
                        <MenuItem 
                            onClick={()=> {handleClose(); setValue(1)}}
                            component={Link}
                            to="/websites"
                            classes={{root: classes.menuItem}}
                        > 
                            Website Development
                        </MenuItem>
                     </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}

export default Header