import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'

export default function SignupComponent({ errors, onChangeHandler, onSubmitHandler }) {
    return (
        <Container fluid>
            <Row xs="2" className='mt-4'>
                <Col  md={{ offset: 0, size: 4,}}>
                <img height="900" width="400" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="Sample image" />
                </Col>
                <Col md={{ offset: 0, size: 7,}}>
                <Card>
                        <CardHeader>Register</CardHeader>
                        <CardBody>
                            <FormGroup inline>
                                <Label>First Name</Label>
                                <Input name='firstName' onChange={e => onChangeHandler(e)} invalid={(errors.firstNameError)} />
                                <FormFeedback>{errors.firstNameError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input name='lastName' onChange={e => onChangeHandler(e)} invalid={(errors.lastNameError)} />
                                <FormFeedback>{errors.lastNameError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Display Name</Label>
                                <Input name='displayName' onChange={e => onChangeHandler(e)} invalid={(errors.displayNameError)} />
                                <FormFeedback>{errors.displayNameError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input name='email' onChange={e => onChangeHandler(e)} invalid={(errors.emailError)} />
                                <FormFeedback>{errors.emailError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input name='username' onChange={e => onChangeHandler(e)} invalid={(errors.usernameError)} />
                                <FormFeedback>{errors.usernameError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Mobile</Label>
                                <Input name='mobile' onChange={e => onChangeHandler(e)} invalid={(errors.mobileError)} />
                                <FormFeedback>{errors.mobileError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Company</Label>
                                <Input name='company' onChange={e => onChangeHandler(e)} invalid={(errors.companyError)} />
                                <FormFeedback>{errors.companyError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input name='password' onChange={e => onChangeHandler(e)} invalid={(errors.passwordError)} />
                                <FormFeedback>{errors.passwordError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <Input name='confirmPassword' onChange={e => onChangeHandler(e)} invalid={(errors.confirmPasswordError)} />
                                <FormFeedback>{errors.confirmPasswordError}</FormFeedback>
                            </FormGroup>
                            <Button onClick={onSubmitHandler} type='button'>Submit</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
