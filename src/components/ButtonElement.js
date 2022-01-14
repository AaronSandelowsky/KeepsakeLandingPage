import styled from "styled-components"
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')
    };
    white-space: no-wrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 20px')};
    color: ${({ dark }) => (dark ? '#010606' : 'white')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'white' : '#01BF71')};
    }
`

export const Button1 = styled(LinkR)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '#010606')
    };
    white-space: no-wrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 20px')};
    color: ${({ dark }) => (dark ? '#010606' : 'white')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'white' : '#01BF71')};
    }
`