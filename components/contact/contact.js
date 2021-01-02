import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField, Typography, Grid, Box, Button } from "@material-ui/core";
import emailjs from 'emailjs-com';
import "./contact.scss";

const useStyles = makeStyles(theme => ({
  form: {
    top: "3rem",
    left: "50%",
    transform: "translate(-50%, -0%)",
    position: "absolute",
    padding: "3rem",
    background: "RGBA(0,0,0,0.6)",
    borderRadius: "25px",
    border: '2px solid #002654',
    width: "50vw",
    paddingBottom: "1rem",
  },
  button: {
    marginTop: "3rem",
    margin: "auto",
    textAlign: "center",
    display: "grid",
    justifyContent: "center",
  }
})) 

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "#034694",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#034694",
        borderRadius:"20px",
      },
      "&:hover fieldset": {
        borderColor: "#034694",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#034694",
      }
    }
  },
})(TextField);
const Contact = () => {

  const classes = useStyles();
  return (
    <Box component='div'>
      <Grid container justify="center">
        <Box id="contact-form" component="form" className={`${classes.form} contact-form`}>
          <Typography variant="h5" style={{color: "white", textAlign: "center", paddingBottom: "1rem"}}>
            Hire or contact me. Please.
          </Typography>
          <InputField
            id="from_name"
            fullWidth={ true }
            label="Name"
            variant="outlined"
            inputProps={ { style: { color: "white" } } }
            margin="normal"
            size="medium"
            required
          /><br />
          <InputField
            id="email"
            fullWidth={ true }
            label="Email"
            variant="outlined"
            inputProps={ { style: { color: "white" } } }
            margin="normal"
            size="medium"
            required
          /><br />

          <InputField
            id="company"
            fullWidth={ true }
            label="Company Name"
            variant="outlined"
            inputProps={ { style: { color: "white" } } }
            margin="normal"
          /><br />

          <InputField
            id="message"
            fullWidth={ true }
            label="Message"
            variant="outlined"
            inputProps={ { style: { color: "white" } } }
            margin="normal"
            multiline
            rows={ 4 }
            required
          /><br />
          <Button
            id="send-btn"
            className={ "btn-send" }
            variant="outlined"
            color="primary"
            size="large"
            onClick={ e => {
              const template_params = {
                "from_name": document.querySelector("#from_name").value,
                "email": document.querySelector("#email").value,
                "company": document.querySelector("#company").value,
                "message": document.querySelector("#message").value
              }
              if (template_params.from_name !== "" && template_params.email !== "" && template_params.message !== "") {
                emailjs.send('service_i47aoaq', 'template_aflqbbg', template_params, 'user_O8soHnleeJBxVzS3CBIrf')
                  .then((result) => {
                    document.querySelector("#send-btn").classList.add("btn-sent")
                    document.querySelector("#send-btn").textContent = "Sent!"
                  }, (error) => {
                    console.log(error.text);
                  });
              } else {
            alert("Please complete all required fields.");
              }
            }}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Box>);
};

export default Contact;
