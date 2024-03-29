import React, {useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Tabs, Tab, Button, Menu, MenuItem, SwipeableDrawer, IconButton, ListItemText, List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


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
          marginBottom: "3em",
          [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
      },
      logo:{
          height: "8em",
          [theme.breakpoints.down("md")]: {
              height: "7em"
          },
          [theme.breakpoints.down("xs")]: {
              height: "5.5em"
          }
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
          "&:hover": {
            backgroundColor: theme.palette.secondary.light
          }
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
      },
      drawerIcon: {
          height: "50px",
          width: "50px"
      },
      drawerIconContainer: {
          marginLeft: "auto",
          "&:hover": {
              backgroundColor: "transparent"
          }
      },
      drawer: {
          backgroundColor: theme.palette.common.blue
      },
      drawerItem: {
          ...theme.typography.tab,
          color: "white",
          opacity: 0.7
      },
      drawerItemEstimate: {
          backgroundColor: theme.palette.common.orange
      },
      drawerItemSelected:{
          "& .MuiListItemText-root": {
                opacity: 1
          }
      },
      appBar:{
          zIndex: theme.zIndex.modal + 1
      }
  }))


const Header = ({value, setValue, selectedIndex, setSelectedIndex}) => {
    const theme = useTheme();
    // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent); 
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ openMenu, setOpenMenu ] = useState(false)

    const handleChange = (e, newValue ) => {
        setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTrigger)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, i ) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOptions = [
        {name: "Services", link:"/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Developments", link:"/customSoftware", activeIndex: 1, selectedIndex: 1},
        {name: "iOS/Android App Development", link:"/mobileApps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Developments", link:"/websites", activeIndex: 1, selectedIndex: 3},
    ]

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {   name: "Services", 
            link: "/services", 
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined, 
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event) },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3}, 
        {name: "Contact Us", link: "/contact", activeIndex: 4},
    ]

    useEffect(()=>{
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if ( value !== route.activeIndex){
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    setValue(5);
                    break;
                default: 
                    break
            }
        })
    }, [value, menuOptions, selectedIndex, routes, setValue, setSelectedIndex])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} 
                    className={classes.tabContainer} 
                    onChange={handleChange}
                    indicatorColor="primary"
                    >
                        {routes.map((route, i) =>(
                            <Tab
                                key={`${route}${i}`}
                                className={classes.tab}
                                component={Link}
                                to={route.link}
                                label={route.name}
                                aria-owns={route.ariaOwns}
                                aria-haspopup={route.ariaPopup}
                                onMouseOver={route.mouseOver}
                            />
                        ))}
                    </Tabs>
                    <Button
                        component={Link}
                        to="/estimate"
                        variant="contained" 
                        color="secondary" 
                        className={classes.button}
                        onClick={()=>setValue(5)}
                    >
                        Free Estimate
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}
                        classes={{ paper: classes.menu }}
                        MenuListProps={{onMouseLeave: handleClose}}
                        elevation={0}
                        style={{zIndex: 1302}}
                        keepMounted
                    >
                        {menuOptions.map((option,index) => (
                            <MenuItem
                                component={Link}
                                to={option.link}
                                key={`${option}${index}`}
                                classes={{root: classes.menuItem}}
                                onClick={(e)=>{handleMenuItemClick(e,index); setValue(1); handleClose()}}
                                selected={index === selectedIndex && value === 1}
                            >
                               {option.name} 
                            </MenuItem>
                        ))}
                     </Menu>
        </React.Fragment>
    )
    
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}
            onOpen= {()=>setOpenDrawer(true)}
            classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}>
                <List disablePadding>
                    {routes.map( route =>(
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            onClick={()=>{setOpenDrawer(false); setValue(route.activeIndex)}} 
                            divider
                            button
                            classes={{selected: classes.drawerItemSelected}}
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                        >
                            <ListItemText 
                                disableTypography
                                className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] :
                                    classes.drawerItem}
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        onClick={()=>{setOpenDrawer(false); setValue(5)}}  
                        className={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                        divider 
                        button 
                        component={Link} 
                        to="/estimate"
                        selected={value === 5 }
                    >
                        <ListItemText 
                            disableTypography 
                            className={classes.drawerItem}
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
            </SwipeableDrawer>
            <IconButton 
                className={classes.drawerIconContainer}
                onClick={()=> setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} onClick={()=>setValue(0)} component={Link} to="/">
                        <img src={logo} className={classes.logo} alt="company logo"/>
                        </Button>
                        { matches ? drawer : tabs }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}

export default Header