import React, { useState } from "react";
import axios from 'axios'
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
  Hidden,
  Snackbar,
  CircularProgress
} from "@material-ui/core";
import { cloneDeep } from "lodash";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    marginBottom: "2em",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const newQuestions = cloneDeep(defaultQuestions);

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [questions, setQuestions] = useState(defaultQuestions);

  const [dialogOpen, setDialogOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [ alert, setAlert ] = useState({ 
    open: false,
    message: "",
    backgroundColor: ""
  })

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);

  const [ service, setService ] = useState([]);
  const [ platforms, setPlatforms ] = useState([]);
  const [ features, setFeatures ] = useState([]);
  const [ customFeatures, setCustomFeatures ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ users, setUsers ] = useState("")

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const onChange = (e) => {
    let isValid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!isValid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!isValid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].cost;

      setUsers(userCost.title)

      cost -= userCost;
      cost *= userCost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = []

    if(questions.length > 2) {
      questions
        .filter(question => question.title === "Which platforms do you need supported?")
        .map(question=> question.options
        .filter(option=> option.selected))[0]
        .map(option => newPlatforms.push(option.title));
    }
  }

  const getFeatures = () => {
    let newFeatures = []

    if(questions.length > 2) {
      questions
        .filter(question => question.title === "Which features do you expect to see?")
        .map(question=> question.options
        .filter(option=> option.selected))[0]
        .map(option => option
        .map(newFeature => newFeatures.push(newFeature.title)));
    }
    setFeatures(newFeatures)
  }

  const getCategory = () => {
    if(questions.length === 2){
      const newCategory = questions
        .filter(question => question.title === "Which type of website are you wanting?")[0].options
        .filter(option => option.selected)[0].title

        setCategory(newCategory)
    }
  }

  const sendEstimate = async () => {

    try {
      const resp = await axios.get(
        `https://us-central1-material-ui-prac.cloudfunctions.net/sendMail`,
        {
          params: {
            name,
            email,
            phone,
            message,
            total,
            service,
            platforms, 
            features,
            customFeatures,
            users
          }
        }
      );
      setLoading(false);
      setAlert({
        open: true,
        message: "Estimate placed successfully",
        backgroundColor: "#4BB543"
      })
      console.log(resp.data);
    } catch (err) {
      setLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong, please try again",
        backgroundColor: "#FF3232"
      })
      console.log(err);
    }

  }

  const estimateDisabled = () => {

    const emptySelections = questions.map(question => 
      question.options.
      filter(option=>option.selected)).
      filter(question => question.length == 0)

    if(questions.length === 2){
      if(emptySelections.length === 1){
        return false
      }
    }else if(questions.length){
      return true
    }
  }

  const getCustomFeatures = () => {
    if(questions.length > 2) {
      const newCustomFeatures = questions
        .filter(question => question.title === "What type of custom features do you expect to need?")
        .map(question =>question.options
        .filter(option => option.selected))[0][0].title

        setCustomFeatures(newCustomFeatures)
    }
  }

  const softwareSelection = (
    <Grid container direction="column">
    <Grid item container alignItems="center">
      <Grid item>
        <img src={check} alt="checkmark"/>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          You want {service}
          {platforms.length > 0 ? "filler, cuz I'm not putting in 5 ternary statements here" :null}
        </Typography>
      </Grid>
    </Grid>
    <Grid item container alignItems="center" style={{marginBottom: "1.25em"}}>
      <Grid item xs={2}>
        <img src={check} alt="checkmark"/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">
          More ternary nonsense
        </Typography>
      </Grid>
    </Grid>
    <Grid item container alignItems="center">
      <Grid item xs={2}>
        <img src={check} alt="checkmark"/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">
          The custom features will be of {customFeatures.toLowerCase()}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  )

  const websiteSelection = (
    <Grid container direction="column" style={{marginTop: "14em"}}>
    <Grid item container alignItems="center" style={{marginBottom: "1.25em"}}>
      <Grid item xs={2}>
        <img src={check} alt="checkmark"/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">
          You want {category === "Basic" ? "a basic website" : `an ${category} Website`}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  )

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}>
        <Grid item style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}>
          <Typography variant="h2" align={ matchesMD ? "center" : undefined}>Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: matchesMD ? 0 : "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        lg
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginBottom: "2.5em",
                    marginTop: "5em",
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0
                  }}
                  gutterBottom
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  gutterBottom
                  style={{ marginBottom: "2,5em" }}
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    direction="column"
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          item
          container
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={
                  navigationPreviousDisabled() ? backArrowDisabled : backArrow
                }
                alt="Previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="Next Question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="container"
            disabled={estimateDisabled()}
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
        style={{zIndex: 1302}}
        >
        <Grid container justify="center">
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid 
            container 
            justify="space-around" 
            direction={matchesSM ? "column" : "row"} 
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid item container direction="column" md={7} style={{maxWidth: "20em"}}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  id="email"
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
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
              <Grid item>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                  Fill out your name, phone number, and email. Place your
                  request with details moving forward and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid 
              item container 
              direction="column" 
              alignItems={matchesSM ? "center" : undefined}
              md={5} 
              style={{maxWidth: "30em"}}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2 ? softwareSelection : websiteSelection}
                </Grid>
              </Hidden>
              <Grid item>
                <Button 
                  variant="contained" 
                  className={classes.estimateButton} 
                  onClick={sendEstimate}
                >
                  {loading ? <CircularProgress/> : <React.Fragment>
                  Place Request
                  <img src={send} alt="paper airplane" style={{marginLeft: "0.5em"}}/>
                  </React.Fragment>}
                </Button>
              </Grid>
              <Hidden mdUp>
              <Grid item style={{marginBottom: matchesSM ? "5em": 0 }}>
                <Button style={{fontWeight: 300}} color="primary" onClick={()=> setDialogOpen(false)}>Cancel</Button>
              </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar 
        open={ alert.open } 
        message={ alert.message} 
        ContentProps={{style: {backgroundColor: alert.backgroundColor}}} 
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        onClose={()=> setAlert({...alert, open: false})}
        autoHideDuration={4000}
      />
    </Grid>
  );
};

export default Estimate;
