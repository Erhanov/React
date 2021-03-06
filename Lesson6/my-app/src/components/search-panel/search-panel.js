import React, {Component} from 'react'
import styled from 'styled-components';

const SearchInput = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

export default class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term : ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <SearchInput
                className='form-control'
                type='text'
                placeholder='Поиск по записям'
                onChange={this.onUpdateSearch}
            />
        )
    }
}