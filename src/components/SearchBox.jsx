import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import { Link } from "react-router-dom"

const Outer = styled.div`
    padding: 35px;
    background: ${theme.pale};
    margin-top: 45px;
    @media screen and (min-width: 700px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 65px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const Field = styled.div`
    flex: 1;
`

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`

const Input = styled.input`
    border: 2px solid ${theme.black};
    padding: 15px;
    font-size: 1.1rem;
    color: ${theme.black};
    width: 100%;
    &:focus{
        outline: 3px solid ${theme.yellow};
    }
`

const Button = styled.button`
    display: block;
    padding: 17px 25px;
    background: ${theme.green1};
    color: ${theme.white};
    font-size: 1.1rem;
    border: 0px;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    &:hover{
        background: ${theme.green2};
    }
    &:focus{
        outline: 3px solid ${theme.yellow};
    }
`

const PopularLinks = styled.nav`
    margin-top: 35px;
    @media screen and (min-width: 700px){
        margin-top: 0px;
        border-left: 2px solid ${theme.text};
        padding-left: 35px;
    }
`

const PopularLink = styled(Link)`
    display: block;
    color: ${theme.blue1};
    margin-top: 5px;
    font-size: 1.1rem;
`

const SearchBox = ({
    onSubmit,
    query,
    setQuery
}) =>
    <Outer>
        <Form onSubmit={onSubmit}>
            <Field>
                <Label htmlFor="query">Search for a partner organisation</Label>
                <Input 
                    type="text"  
                    name="query" 
                    id="query" 
                    placeholder="eg. apprenticeships..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </Field>
            <Button>Search</Button>
        </Form>

        <PopularLinks>
            <p>Most popular</p>
            <PopularLink to="#">Example popular choice</PopularLink>
            <PopularLink to="#">Example popular choice</PopularLink>
            <PopularLink to="#">Example popular choice</PopularLink>
        </PopularLinks>

    </Outer>



export default SearchBox