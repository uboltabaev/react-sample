import React, { useCallback, useEffect, useState, useRef } from "react";
import Head from 'next/head';
import Router from "next/router";
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwipeableViews from 'react-swipeable-views'
import moment from "moment";
import NextButton from "../../components/mui/next-button";
import BackButton from "../../components/mui/back-button";
import BookingSteppers from '../../components/stepper/stepper'
import theme from "../../theme";

const finishTime = [
    '5:00am',
    '5:30am',
    '6:00am',
    '6.30am',
    '7:00am',
    '7:30am',
    '8:00am',
    '8:30am',
    '9:00am',
    '09:30am',
    '10:00am',
    '11:30am',
    '12:00pm',
    '12:30pm',
    '1:00pm',
    '1:30pm',
    '2:00pm',
    '2:30pm',
    '3:00pm',
    '3:30pm',
    '4:00pm',
    '4:30pm',
    '5:00pm',
    '5:30pm',
    '6:00pm',
    '6:30pm',
    '7:00pm',
    '7:30pm',
    '8:00pm',
    '8:30pm',
    '9:00pm',
    '9:30pm',
    '10:00pm',
    '10:30pm',
    '11:00pm',
    '11:30pm',
    '12am'    
]

const step1Validation = {
    isValid: false,
    isValidated: false
}

const step2Validation = {
    isValid: false,
    isValidated: false,
    isDateValid: false,
    isTimeValid: false,
    isLocationValid: false
}

const step3Validation = {
    isValid: false,
    isValidated: false,
    isFirstnameValid: false,
    isLastnameValid: false,
    isEmailValid: false,
    isPhoneValid: false
}

const tomorrow = moment().add(1, 'day').toDate()

function FormalBooking() {
    const [state, setState] = useState({
        activeStep: 0,
        blocked: false,
        noHairAndMakeup: '',
        noMakeupOnly: '',
        noHairstylingOnly: '',
        groupBookingDate: tomorrow,
        groupReadyTime: '',
        location: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        locationAddress: '',
        additionalDetails: '',
        step1Validation,
        step2Validation,
        step3Validation
    })

    const cid = useRef(null)
    const fbp = useRef(null)
    const fbc = useRef(null)
    const formName = useRef(null)

    useEffect(() => {
        const { step1Validation, activeStep } = state
        if (step1Validation.isValid && step1Validation.isValidated && activeStep === 0) {
            setState({...state, activeStep: ++state.activeStep})
        } 
    }, [state.step1Validation, state.activeStep])

    useEffect(() => {
        const { step2Validation, activeStep } = state
        if (step2Validation.isValid && step2Validation.isValidated && activeStep === 1) {
            setState({...state, activeStep: ++state.activeStep})
        }
    }, [state.step2Validation, state.activeStep])

    const isStep1Valid = useCallback(() => {
        const { noHairAndMakeup, noMakeupOnly, noHairstylingOnly } = state
        let foundErrorNum = 0
        if (noHairAndMakeup === '' || noHairAndMakeup == 0) {
            foundErrorNum ++
        } 
        if (noMakeupOnly === '' || noMakeupOnly == 0) {
            foundErrorNum ++
        } 
        if (noHairstylingOnly === '' || noHairstylingOnly ==0) {
            foundErrorNum ++
        }
        if (foundErrorNum > 2) {
            setState({
                ...state, 
                step1Validation: {
                    isValid: false,
                    isValidated: true
                }
            })    
        } else {
            setState({
                ...state,
                step1Validation: {
                    isValid: true,
                    isValidated: true
                }
            })
        }
        return foundErrorNum > 2 ? false : true
    }, [state])

    const isStep2Valid = useCallback(() => {
        const { groupBookingDate, groupReadyTime, location } = state
        const d = moment(groupBookingDate).toDate()
        const today = moment().toDate()
        let isAValid = true
        let isBValid = true
        let isCValid = true
        if (d <= today) {
            isAValid = false
        }
        if (!groupReadyTime) {
            isBValid = false
        }
        if (!location) {
            isCValid = false
        }
        setState({
            ...state,
            step2Validation: {
                isValid: (isAValid && isBValid),
                isValidated: true,
                isDateValid: isAValid,
                isTimeValid: isBValid,
                isLocationValid: isCValid
            }
        })
    }, [state])

    const isStep3Valid = useCallback(() => {
        const { firstName, lastName, email, phoneNumber } = state
        const isValid = (firstName !== '' && lastName !== ''  && email !== '' && phoneNumber !== '')
        setState({
            ...state,
            step3Validation: {
                isValid,
                isValidated: true,
                isFirstnameValid: firstName !== '',
                isLastnameValid: lastName !== '',
                isEmailValid: email !== '',
                isPhoneValid: phoneNumber !== ''
            }
        })
        return isValid
    }, [state])

    const goNextStep = useCallback(() => {
        if (state.activeStep === 0) {
            if (!isStep1Valid()) {
                return
            } 
        } else if (state.activeStep === 1) {
            if (!isStep2Valid()) {
                return
            }
        }
    }, [state])
    
    const returnPrevStep = () => {
        setState({...state, step1Validation, step2Validation, step3Validation, activeStep: --state.activeStep})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isStep3Valid()) {
            setState({...state, blocked: true})

            const { noHairAndMakeup, noMakeupOnly, noHairstylingOnly, groupBookingDate, groupReadyTime, location, firstName, lastName, email, phoneNumber, additionalDetails } = state
            const data = {
                noHairAndMakeup,
                noMakeupOnly,
                noHairstylingOnly,
                groupBookingDate,
                groupReadyTime,
                location,
                firstName,
                lastName,
                email,
                phoneNumber,
                additionalDetails,
                cid: cid.current.value,
                fbp: fbp.current.value,
                fbc: fbc.current.value,
                formName: formName.current.value
            }

            const JSONdata = JSON.stringify(data)
            const endpoint = '/api/formal-booking'
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSONdata
            }
            
            const response = await fetch(endpoint, options)
            const result = await response.json()

            if (result.code === 'success') {
                Router.push("/formal-booking/thank-you");
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Makeup Palace</title>
                <meta name='description' content='Fit For A Queen.'/>
            </Head>
            <section className="booking-container">
                <Backdrop open={state.blocked}
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <h1>Makeup Palace Formal Bookings</h1>
                <p>
                    For all formal bookings and enquiries, please fill 
                    out the form below and we’ll get back to you within a few hours!
                </p>
                <div className="booking-form">
                    <form name="booking-form" id="booking-form" method="post" action="/api/formal-booking" onSubmit={handleSubmit}>
                        <input ref={cid} type={'hidden'} name="cid" id="cid" value=""/>
                        <input ref={fbp} type={'hidden'} name="fbp" id="fbp" value=""/>
                        <input ref={fbc} type={'hidden'} name="fbc" id="fbc" value=""/>
                        <input ref={formName} type={'hidden'} name="form-name" id="" value="formal"/>
                        <div className="stepper">
                            <BookingSteppers activeStep={state.activeStep}/>
                        </div>
                        <SwipeableViews index={state.activeStep}>
                            <>
                                <p>
                                    Please select how many people for each service
                                </p>
                                <div className="input">
                                    <TextField id="outlined-basic"
                                        error={!state.step1Validation.isValid && state.step1Validation.isValidated} 
                                        label="No of Hair and Makeup" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        type="number"
                                        fullWidth
                                        value={state.noHairAndMakeup}
                                        onChange={(event) => setState({...state, noHairAndMakeup: event.target.value})}
                                        helperText={!state.step1Validation.isValid && state.step1Validation.isValidated ? 'At least one of the fields should must have a value' : ''}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="No of Makeup Only" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        type="number"
                                        fullWidth
                                        value={state.noMakeupOnly}
                                        onChange={(event) => setState({...state, noMakeupOnly: event.target.value})}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="No of Hairstyling Only" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        type="number"
                                        fullWidth
                                        value={state.noHairstylingOnly}
                                        onChange={(event) => setState({...state, noHairstylingOnly: event.target.value})}
                                    />
                                </div>
                                <div className="form-bottom">
                                    <NextButton type="button" variant="outlined" onClick={goNextStep}>
                                        Next
                                    </NextButton>
                                </div>
                            </>
                            <>
                                <p>
                                    Please select a date and time
                                </p>
                                <div className="input">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                            label="Please Select the date for your group booking"
                                            inputFormat="dd.MM.yyyy"
                                            mask="__.__.____"
                                            value={state.groupBookingDate}
                                            onChange={(value) => setState({...state, groupBookingDate: value})}
                                            renderInput={(params) => <TextField {...params} fullWidth error={!state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isDateValid} helperText={!state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isDateValid ? 'Invalid date' : ''}/>}
                                            OpenPickerButtonProps={{
                                                style: {color: '#E5C288'}
                                            }}
                                            minDate={tomorrow}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="input">
                                    <FormControl fullWidth>
                                        <InputLabel id="group-ready-time-label">Please select the time you need the group to be ready by</InputLabel>
                                        <Select labelId="group-ready-time-label"
                                            id="group-ready-time"
                                            value={state.groupReadyTime}
                                            label="Please select the time you need the group to be ready by"
                                            onChange={(event) => setState({...state, groupReadyTime: event.target.value})}
                                            sx={{
                                                borderColor: '#fff'
                                            }}
                                            variant="outlined"
                                            error={!state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isTimeValid}
                                        >
                                            { finishTime.map((time, index) => 
                                                <MenuItem key={index} value={time}>{time}</MenuItem>
                                            )}
                                        </Select>
                                        { !state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isTimeValid &&
                                            <FormHelperText sx={{
                                                color: '#d32f2f !important',
                                                textAlign: 'left !important',
                                                fontSize: '14px !important',
                                                paddingBottom: '0 !important'
                                            }}>
                                                Time is required
                                            </FormHelperText>
                                        }
                                    </FormControl>
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="Location" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        value={state.location}
                                        onChange={(event) => setState({...state, location: event.target.value})}
                                        error={!state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isLocationValid}
                                        helperText={!state.step2Validation.isValid && state.step2Validation.isValidated && !state.step2Validation.isLocationValid ? 'Location is required' : ''}
                                    />
                                </div>
                                <Row className="m-0">
                                    <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 4, order: 1}}>
                                        <div className="form-bottom2">
                                            <BackButton type="button" variant="outlined" onClick={returnPrevStep}>
                                                Back
                                            </BackButton>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 4, order: 2}}>
                                    <div className="form-bottom">
                                            <NextButton type="button" variant="outlined" onClick={goNextStep}>
                                                Next
                                            </NextButton>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12, order: 3}} sm={{span: 12, order: 3}} md={{span: 4, order: 3}}>&nbsp;</Col>
                                </Row>
                            </>
                            <>
                                <p>
                                    Please fill in your details
                                </p>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="First Name" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        value={state.firstName}
                                        onChange={(event) => setState({...state, firstName: event.target.value})}
                                        error={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isFirstnameValid}
                                        helperText={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isFirstnameValid ? 'First Name is required' : ''}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="Last Name" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        value={state.lastName}
                                        onChange={(event) => setState({...state, lastName: event.target.value})}
                                        error={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isLastnameValid}
                                        helperText={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isLastnameValid ? 'Last Name is required' : ''}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="Email Address" 
                                        variant="outlined"
                                        type={'email'}
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        value={state.email}
                                        onChange={(event) => setState({...state, email: event.target.value})}
                                        error={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isEmailValid}
                                        helperText={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isEmailValid ? 'Email Address is required' : ''}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="Phone Number" 
                                        variant="outlined"
                                        type={'tel'}
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        value={state.phoneNumber}
                                        onChange={(event) => setState({...state, phoneNumber: event.target.value})}
                                        error={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isPhoneValid}
                                        helperText={!state.step3Validation.isValid && state.step3Validation.isValidated && !state.step3Validation.isPhoneValid ? 'Phone Number is required' : ''}
                                    />
                                </div>
                                <div className="input">
                                    <TextField id="outlined-basic" 
                                        label="Additional Details" 
                                        variant="outlined"
                                        sx={{
                                            input: {
                                                color: '#fff'
                                            }
                                        }}
                                        fullWidth
                                        multiline
                                        minRows={7}
                                        maxRows={10}
                                        value={state.additionalDetails}
                                        onChange={(event) => setState({...state, additionalDetails: event.target.value})}
                                    />
                                </div>                            
                                <Row className="m-0">
                                    <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 4, order: 1}}>
                                        <div className="form-bottom2">
                                            <BackButton type="button" variant="outlined" onClick={returnPrevStep}>
                                                Back
                                            </BackButton>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 4, order: 2}}>
                                        <div className="form-bottom">
                                            <NextButton type="submit" variant="outlined">
                                                Request Booking
                                            </NextButton>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12, order: 3}} sm={{span: 12, order: 3}} md={{span: 4, order: 3}}>&nbsp;</Col>
                                </Row>
                            </>
                        </SwipeableViews>
                    </form>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default FormalBooking