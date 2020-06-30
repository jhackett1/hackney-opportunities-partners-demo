import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"

const Outer = styled.li`
    padding: 35px;
    background: ${theme.white};
    margin-bottom: 25px;
`

const Name = styled.h2`
    margin-bottom: 10px;
`

const Description = styled.p`
    margin-bottom: 20px;
`

const Tag = styled.span`
    background: ${theme.pale};
    padding: 5px 10px;
    border-radius: 200px;
    margin-right: 10px;
`

const ResultCard = ({
    fields
}) =>
    <Outer>
        <Name>{fields["Name"]}</Name>
        <Description>{fields["Details"]}</Description>
        <footer>
            {fields["Type"] && <Tag>{fields["Type"]}</Tag>}
            {fields["Target Audience"] && <Tag>For {fields["Target Audience"]}</Tag>}
        </footer>
    </Outer>    

export default ResultCard