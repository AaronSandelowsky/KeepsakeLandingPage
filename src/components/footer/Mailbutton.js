import React from 'react'
import { Link } from 'react-router-dom'
const Mailbutton = () => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default Mailbutton
