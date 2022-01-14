import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormButton, Text, Button } from '../Sign in/SigninElements'
import Element from './component/Element';
import { useState, useEffect } from 'react';
import formJSON from './signUpForm.json';
import { FormContext } from './FormContext';


const SignUp = () => {

    const [elements, setElements] = useState(null);
    useEffect(() => {
        setElements(formJSON[0])
    }, [])

    const { fields, page_label } = elements ?? {}
    const handleSubmit = () => {
        console.log(elements)
    }
    const handleChange = (id, event) => {
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { field_type, field_id, field_value } = field;
            if (id === field_id) {
                field['field_value'] = event.target.value;
            }
            setElements(newElements)
        });
        console.log('handle change')
        console.log(elements)
    }


    return (
        <div>
            <FormContext.Provider value={{ handleChange }}>
                <Container>
                    <FormWrap>
                        <Icon to="/">KeepsaKe</Icon>
                        <FormContent>
                            <Form>
                                <FormH1>{page_label}</FormH1>
                                <Text>For early access to our site</Text>
                                {fields ? fields.map((field, i) => <Element key={i} field={field} />) :
                                    null}
                                <FormButton type='submit'> Sign up </FormButton>
                                <Text>Already have an account?</Text>
                                <br></br>
                                <Button to='/signin'>Sign In</Button>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </FormContext.Provider>
        </div>
    )
}

export default SignUp
