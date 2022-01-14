import React from 'react'
import Input from './elements/Input';

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value } }) => {


    return (<Input
        field_id={field_id}
        field_label={field_label}
        field_placeholder={field_placeholder}
        field_value={field_value}
        field_type={field_type} />)



}

export default Element
