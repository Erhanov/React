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
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'Going to learn JS', important: false, like: false, id: 2},
                {label: 'Going to learn HTML', important: false, like: false, id: 3}
            ],
            term : '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.onToggleImportant = this.onToggleImportant.bind(this);
        // this.onToggleLike = this.onToggleLike.bind(this);
        this.onToggleButton = this.onToggleButton.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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



        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleButton(id, choice) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            let newItem = {}
            if (choice === 'important') {
                newItem = {...old, important: !old.important};
            } else if (choice === 'like') {
                newItem = {...old, like: !old.like};
            }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    // onToggleImportant(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const old = data[index];
    //         const newItem = {...old, important: !old.important};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     });
    // }

    // onToggleLike(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const old = data[index];
    //         const newItem = {...old, like: !old.like};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     });
    // }

    searchPost(items, term) {
        if (term.length === 0) { 
            return items 
        } else { 
            return items.filter((item) => { 
                return item.label.indexOf(term) > -1
            }) 
        }
    }
    
    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <SearchPanelStyle className='d-flex'>
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </SearchPanelStyle>
                <PostList 
                        posts={visiblePosts}
                        onDelete={this.deleteItem}
                        onToggleButton={this.onToggleButton}
                        onToggleButton={this.onToggleButton}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
            
        );
    }
}