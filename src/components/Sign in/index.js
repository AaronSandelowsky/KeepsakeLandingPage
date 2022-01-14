import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButton, Text, Button } from './SigninElements'

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">KeepsaKe</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in</FormH1>
                            <Text><strong>Currently unavaliable</strong></Text>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput tyoe='email' required />
                            <FormLabel htmlFor='for'> Password </FormLabel>
                            <FormInput tyoe='password' required />
                            <FormButton type='submit'> Log in </FormButton>
                            <Text>Forgot Password</Text>
                            <Text>Don't have an account?</Text>
                            <br></br>
                            <Button to='/signup'>Sign Up</Button>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default SignIn
