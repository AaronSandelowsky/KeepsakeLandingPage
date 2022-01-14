import React, { useContext } from 'react'
import FormContext from '../../FormContext'
import { FormLabel, FormInput } from '../../../Sign in/SigninElements'

const Input = ({ field_id, field_label, field_placeholder, field_value, field_type }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>

            <FormLabel htmlfor={field_value}> {field_label} </FormLabel>
            <FormInput type={field_type} id={field_id} placeholder={field_placeholder} value={field_value}
                onChange={event => handleChange(field_id, event)} />


        </>

    )
}

export default Input
