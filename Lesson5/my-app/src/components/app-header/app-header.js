import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'}
        :hover {
            color: blue
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }

`

const AppHeader = () => {
    return (
        <Header>
            <h1>Ержанов Азат</h1>
            <h2>5 постов, 0 лайков</h2>
        </Header>
    )    
}

export default AppHeader;