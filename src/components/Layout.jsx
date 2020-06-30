import React from "react"
import { Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import theme from "./_theme"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Open Sans", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${theme.black};
    }
`

const Header = styled.header`
    padding: 25px;
    background: ${theme.black};
`

export const Container = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

const HeaderContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MastheadLink = styled(Link)`
    color: ${theme.white};
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.yellow};
    }
`

const Masthead = styled.h1`
    color: ${theme.white};
    font-size: 1.5rem;
`

const Nav = styled.nav`
    display: none;
    @media screen and (min-width: 700px){
        display: block;
    }
`

const NavLink = styled(Link)`
    color: ${theme.white};
    text-decoration: none;
    margin-right: 5px;
    font-weight: 600;
    padding: 10px;
    &:focus{
        outline: 3px solid ${theme.yellow};
    }
`

const ButtonLink = styled(NavLink)`
    margin-left: 15px;
    margin-right: 0px;
    border: 2px solid ${theme.white};
    border-radius: 5px;
`

export const Main = styled.main`
    background: ${theme.pale};
    padding: 25px;
    @media screen and (min-width: 700px){
        padding: 45px 25px;
    }
`

export const PageHeader = styled.header`
    padding: 50px 25px;
    @media screen and (min-width: 700px){
        /* padding: 75px 25px; */
    }
`

export const PageTitle = styled.h1`
    font-size: 3rem;
    @media screen and (min-width: 700px){
        font-size: 4rem;
    }
`

const Layout = ({
    children
}) =>
    <>
        <GlobalStyle/>
        <Header>
            <HeaderContainer>
                <MastheadLink to="/">
                    <Masthead>Hackney Opportunities</Masthead>
                </MastheadLink>
                <Nav>
                    <NavLink to="/">Opportunities</NavLink>
                    <NavLink to="/partners">Partners</NavLink>
                    <ButtonLink to="#">Sign up</ButtonLink>
                </Nav>
            </HeaderContainer>
        </Header>
        {children}
    </>

export default Layout