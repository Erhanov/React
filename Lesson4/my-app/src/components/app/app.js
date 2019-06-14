import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import '../css/index.css';
import '../css/app.css';
import '../css/app-header.css';
import '../css/search-panel.css';
import '../css/post-status-filter.css';
import '../css/post-list.css';
import '../css/post-list-item.css';
import '../css/post-add-form.css';

const App = () => {


    const data = [
        {label: 'Going to learn React', important: true, id: 'qwe'},
        {label: 'Going to learn JS', important: false, id: 'asd'},
        {label: 'Going to learn HTML', important: false, id: 'zxc'}
    ];

    return (
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data}/>
                <PostAddForm/>
            </div>
            
        );
}

export default App;