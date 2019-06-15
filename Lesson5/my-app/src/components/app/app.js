import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import '../css/index.css';
import '../css/post-status-filter.css';
import '../css/post-list-item.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const SearchPanelStyle = styled.div`
    margin: 1rem 0;
`;

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'Going to learn JS', important: false, id: 2},
                {label: 'Going to learn HTML', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;

        this.htmlId = function guidGenerator() {
            let S4 = function() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        };
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body, important: false, id: this.htmlId()
        }

        console.log(newItem.id);

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <SearchPanelStyle className='d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelStyle>
                <PostList 
                        posts={this.state.data}
                        onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
            
        );
    }
}