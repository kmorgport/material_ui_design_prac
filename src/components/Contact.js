import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ui/ButtonArrow";

import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  TextField,
} from "@material-ui/core";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`
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
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  const [ name, setName] = useState("");

  const [ email, setEmail] = useState("");
  const [ emailHelper, setEmailHelper ] = useState("")

  const [ phone, setPhone] = useState("");
  const [ phoneHelper, setPhoneHelper ] = useState("")

  const [ message, setMessage] = useState("");
  const onChange = e => {
    let isValid;

    switch(e.target.id){
      case 'email':
        setEmail(e.target.value)
        isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        if(!isValid){
          setEmailHelper("Invalid email")
        }else{
          setEmailHelper("")
        }
        break;
      case 'phone':
        setPhone(e.target.value)
        isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)
        if(!isValid){
          setPhoneHelper("Invalid Phone")
        }else{
          setPhoneHelper("")
        }
        break
      default:
        break;
    }
  }

  return (
    <Grid container direction="row">
      <Grid 
        item container 
        direction="column" 
        alignItems="center" 
        justify="center" 
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesMD ? "1em" : matchesMD ? "5em" : 0
        }}
        lg={4} xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography 
                align={ matchesMD ? "center" : undefined } 
                variant="h2" 
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={ matchesMD ? "center" : undefined }
                style={{ color: theme.palette.common.blue }}
              >
                We're Waiting
              </Typography>
            </Grid>
            <Grid item container style={{marginTop: "2em"}}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em " }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em"}}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em ", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  person@email.com
                </Typography>
              </Grid>
            </Grid>
            <Grid 
              item container 
              direction="column" 
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{marginBottom: "0.5em"}}>
                <TextField
                  label="Name"
                  error
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{marginBottom: "0.5em"}}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{marginBottom: "0.5em"}}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length!== 0}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                value={message}
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                fullWidth
                id="message"
                multiline
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button variant="contained" className={classes.sendButton}>
                Send Message
                <img
                  src={airplane}
                  alt="airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item container
        className={classes.background}
        alignItems="center"
        directions={matchesMD ? "column" : "row" }
        justify={ matchesMD ? "center" : undefined}
        lg={8} xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={ matchesMD ? "center" : undefined } >
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" align={ matchesMD ? "center" : undefined } style={{ fontSize: "1.5" }}>
                Take advantage of the 21st century.
              </Typography>
              <Grid container item justify={matchesSM ? "center" : undefined}>
                <Button
                  component={Link}
                  to="/estimate"
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  className={classes.learnButton}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
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
      </Grid>
    </Grid>
  );
};

export default Contact;
