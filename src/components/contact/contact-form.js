import { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Router from "next/router";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './contact-form.module.css';
import StickySidemenu, { SIDEMENU_MODE } from '../sticky-sidemenu/sticky-sidemenu';
import NextButton from '../mui/next-button';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/formal-booking', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  return result
}

function ContactForm() {
  const [state, setState] = useState({
    blocked: false,
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isFormValidated: false,
    isFirstNameValid: false,
    isLastNameValid: false,
    isEmailValid: false
  })

  let { firstName, lastName, email } = state
  const { blocked, message, isFormValidated, isFirstNameValid, isLastNameValid, isEmailValid } = state

  const cid = useRef(null)
  const fbp = useRef(null)
  const fbc = useRef(null)
  const formName = useRef(null)

  const isFormValid = () => {
    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()
    setState({
      ...state,
      isFormValidated: true,
      isFirstNameValid: !firstName ? false : true,
      isLastNameValid: !lastName ? false : true,
      isEmailValid: !email ? false : true
    })
    if (!firstName || !lastName || !email)
      return false
    else
      return true
  }

  async function sendMessageHandler(event) {
    event.preventDefault()
    if (isFormValid()) {
      setState({...state, blocked: true})
      const response = await sendContactData({
        firstName,
        lastName,
        email,
        message,
        cid: cid.current.value,
        fbp: fbp.current.value,
        fbc: fbc.current.value,
        formName: formName.current.value
      })

      if (response.code === 'success') {
        Router.push("/contact/thank-you")
      }
    } 
  }

  return (
    <section className={classes.contact}>
      <Backdrop open={blocked}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
          <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Service or Booking Enquires</h1>
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <input ref={cid} type={'hidden'} name="cid" id="cid" value=""/>
          <input ref={fbp} type={'hidden'} name="fbp" id="fbp" value=""/>
          <input ref={fbc} type={'hidden'} name="fbc" id="fbc" value=""/>
          <input ref={formName} type={'hidden'} name="form-name" id="" value="contact"/>
          <Row>
            <Col>
              <div className={classes.control}>
                <TextField label="First Name" 
                    variant="outlined"
                    sx={{
                        input: {
                            color: '#fff'
                        }
                    }}
                    fullWidth
                    value={firstName}
                    onChange={(event) => setState({...state, firstName: event.target.value})}
                    error={isFormValidated && !isFirstNameValid}
                    helperText={isFormValidated && !isFirstNameValid ? 'First Name is required' : ''}
                />
              </div>
              <div className={classes.control}>
                <TextField label="Last Name" 
                    variant="outlined"
                    sx={{
                        input: {
                            color: '#fff'
                        }
                    }}
                    fullWidth
                    value={lastName}
                    onChange={(event) => setState({...state, lastName: event.target.value})}
                    error={isFormValidated && !isLastNameValid}
                    helperText={isFormValidated && !isLastNameValid ? 'Last Name is required' : ''}
                />
              </div>
              <div className={classes.control}>
                <TextField label="Email" 
                    variant="outlined"
                    sx={{
                        input: {
                            color: '#fff'
                        }
                    }}
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(event) => setState({...state, email: event.target.value})}
                    error={isFormValidated && !isEmailValid}
                    helperText={isFormValidated && !isEmailValid ? 'Email is required' : ''}
                />
              </div>
              <div className={classes.control}>
                <TextField label="Message" 
                    variant="outlined"
                    sx={{
                        input: {
                            color: '#fff'
                        }
                    }}
                    fullWidth
                    multiline={true}
                    value={message}
                    rows={5}
                    onChange={(event) => setState({...state, message: event.target.value})}
                />
              </div>
            </Col>
            <Col className={`${classes.stickyContainer} d-none d-sm-flex`}>
              <StickySidemenu mode={SIDEMENU_MODE.normal}/>
            </Col>
          </Row>
          <Row>
            <Col className='flex-cc'>
              <div className={classes.nextWrapper}>
                <NextButton type="submit" variant="outlined">
                    Next
                </NextButton>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
