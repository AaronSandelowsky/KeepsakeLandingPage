import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from '../colours'

export const Container = styled.div`
  min-height: 800px;
    overflow-y: auto;
  left: 0;
  right: 0;
  top: 0;
  background: white;
 
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
  
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
  }

`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
      padding: 10px;
  }
  
`

export const Form = styled.form`
    background: ${COLORS.Grey};
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 30px auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }


`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    text-align: center;

`
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: white;
    
`
export const FormInput = styled.input`
    margin-bottom: 32px;
    padding: 16px 16px;
    border: none;
    border-radius: 4px;

    ::placeholder {
        color: lightgray;
        font-size: 1em;
}

`
export const FormInput1 = styled.input`
    margin-bottom: 32px;
    padding: 16px 16px;
    border: none;
    border-radius: 4px;
    height: 100%;

`

export const FormButton = styled.button`
    background: ${COLORS.Blue};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: white;
    font-size: 14px;
    
`

export const Button = styled(Link)`
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

export const br = styled.br`

`