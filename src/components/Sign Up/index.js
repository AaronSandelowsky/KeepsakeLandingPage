import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButton, Text, Button } from '../Sign in/SigninElements'

const SignUp = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">KeepsaKe</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign up</FormH1>
                            <Text>For early access to our site</Text>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput tyoe='email' required />
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput tyoe='text' required />
                            <FormLabel htmlFor='for'> Password </FormLabel>
                            <FormInput tyoe='password' required />
                            <FormLabel htmlFor='for'> Confirm Password </FormLabel>
                            <FormInput tyoe='password' required />
                            <FormButton type='submit'> Log in </FormButton>
                            <Text>Already have an account?</Text>
                            <br></br>
                            <Button to='/signin'>Sign In</Button>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignUp
