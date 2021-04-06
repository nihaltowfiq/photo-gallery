/* eslint-disable no-shadow */
import React, { useRef, useState } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { auth } from '../../redux/authActions';

const formStyle = {
    border: '1px solid gray',
    margin: 'auto',
    maxWidth: '600px',
};

const Login = ({ auth, errMsg }) => {
    const [validated, setValidated] = useState(false);
    const [toggleOption, setToggleOption] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log(email, password);

            if (!toggleOption) {
                auth(email, password, '', toggleOption);
            } else {
                const name = nameRef.current.value;
                auth(email, password, name, toggleOption);
            }
        }
        if (errMsg !== null) {
            setShowMsg(true);
            setTimeout(() => {
                setShowMsg(false);
            }, 4000);
        }
        setValidated(true);
    };

    const handleToggleBtn = () => {
        setToggleOption(!toggleOption);

        if (toggleOption) {
            nameRef.current.value = null;
        }

        emailRef.current.value = null;
        passwordRef.current.value = null;
    };

    return (
        <div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="p-5 rounded mt-5"
                style={formStyle}
            >
                {showMsg && (
                    <Alert transition variant="danger" className="text-center">
                        {errMsg}
                    </Alert>
                )}
                {toggleOption && (
                    <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control required type="text" placeholder="Your Name" ref={nameRef} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Your name.
                        </Form.Control.Feedback>
                    </Form.Group>
                )}

                <Form.Group>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control required type="email" placeholder="Your Email" ref={emailRef} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Your Password"
                        ref={passwordRef}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide your Password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} md="7" className="text-center ">
                        <Button
                            onClick={handleToggleBtn}
                            className="form-control btn_light"
                            variant="light"
                        >
                            {toggleOption ? 'Create an Account!' : 'Already have an Account!'}
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col} md="5" className="">
                        <Button type="submit" className="form-control" variant="success">
                            {toggleOption ? 'Sign Up' : 'Login'}
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        errMsg: state.user.authErrMsg,
    };
};

const mapDispatchToProps = { auth };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
