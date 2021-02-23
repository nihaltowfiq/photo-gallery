import React, { useRef, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const formStyle = {
    border: '1px solid gray',
    margin: 'auto',
    maxWidth: '600px',
};

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const history = useHistory();

    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log(name.current.value, email.current.value, password.current.value.length);
            // name.current.value = '';
            // password.current.value = '';
            // email.current.value = '';
        }

        setValidated(true);
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
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required type="text" placeholder="Your Name" ref={name} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a Your name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control required type="email" placeholder="Your Email" ref={email} />
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
                        ref={password}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a password at least 6 character.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} md="7" className="text-center ">
                        <Button
                            onClick={() => history.push('/login')}
                            className="form-control btn_light"
                            variant="light"
                        >
                            Already have an Account!
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col} md="5" className="">
                        <Button type="submit" className="form-control" variant="success">
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default SignUp;
