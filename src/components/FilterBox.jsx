import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"

const Fieldset = styled.fieldset`
    background: ${theme.white};
    margin-bottom: 35px;
    border: none;
`

const Inner = styled.div`
    padding: 35px;
`

const Legend = styled.legend`
    background: ${theme.green1};
    color: ${theme.white};
    padding: 20px 35px;
    font-size: 1.1rem;
    display: block;
    width: 100%;
`

const Field = styled.div`
    margin-bottom: 15px;
    &::last-of-type{
        margin-bottom: 0px;
    }
`

const Label = styled.label`
    margin-left: 10px;

`

const Input = styled.input`
`

const FilterBox = ({
    name,
    legend,
    options
}) =>
    <Fieldset>
        <Legend>{legend}</Legend>
        <Inner>
            {options.map(option =>
                <Field>
                    <Input 
                        type="checkbox" 
                        name={name} 
                        value={option} 
                        id={`${name}-${option}`}
                    />
                    <Label htmlFor={`${name}-${option}`}>{option}</Label>
                </Field>    
            )}
        </Inner>
    </Fieldset>



export default FilterBox