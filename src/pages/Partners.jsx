import React, { useState, useEffect } from "react"
import { Container, Main, PageHeader, PageTitle } from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import ResultCard from "../components/ResultCard"
import SearchBox from "../components/SearchBox"
import FilterBox from "../components/FilterBox"

const ColumnsContainer = styled(Container)`
    @media screen and (min-width: 700px){
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 55px;
    }
`

const Sidebar = styled.aside``

const ResultList = styled.ul`
    list-style: none;
`

const Count = styled.p`
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: ${theme.grey};
`

const Partners = () => {

    const [ query, setQuery ] = useState("")
    const [ results, setResults ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getResults = async () => {
        setLoading(true)
        const searchFilter = query ? `OR(FIND('${query.toLowerCase()}',LOWER({Name})), FIND('${query.toLowerCase()}',LOWER({Details})))` : ""
        const filter = `AND(${searchFilter})`
        const res = await fetch(`https://api.airtable.com/v0/appOwjeS7MeLQCpMc/Partners?filterByFormula=${filter}`, {
            headers: {"Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
        })
        const data = await res.json()
        setResults(data.records)
        setLoading(false)
    }

    useEffect(() => {
        getResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            <PageHeader>
                <Container>
                    <PageTitle>Partners</PageTitle>
                    <SearchBox 
                        onSubmit={e => {
                            e.preventDefault()
                            getResults()
                        }}
                        query={query}
                        setQuery={setQuery}
                    />
                </Container>
            </PageHeader>
            <Main>
                <ColumnsContainer>
                        <Sidebar>
                            <FilterBox
                                name="type"
                                legend="Type"
                                options={[
                                    "Secondary school",
                                    "Training provider",
                                    "Charity or community group",
                                    "Cookery school",
                                ]}
                            />
                            <FilterBox
                                name="audience"
                                legend="Target audience"
                                options={[
                                    "Young people",
                                    "Older people",
                                    "People with SEND",
                                    "Families with under-5s",
                                ]}
                            />
                        </Sidebar>
                        <ResultList>
                            <Count>Showing {results.length} results</Count>
                            {results.length > 0 ?
                                results.map(result => 
                                    <ResultCard {...result} key={result.id}/>
                                )
                                :
                                loading && <p>Loading...</p>
                            }
                        </ResultList>
                </ColumnsContainer>
            </Main>
        </>
    )
}


export default Partners