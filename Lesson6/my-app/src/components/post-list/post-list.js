import React from 'react';
import PostListItem from '../post-list-item';
import styled from 'styled-components';

const AppList = styled.ul`
    margin-top: 50px;
    .list-group-item {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`;

const PostList = ({posts, onDelete, onToggleButton}) => {
    let filtered = [];

    for (let i = 0; i < posts.length; i++) {
        if (typeof(posts[i]) == 'object') {
            filtered.push(posts[i]);
        }
    }

    const elements = filtered.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}
                        // label={item.label} 
                        // important={item.important} 
                        onDelete={() => onDelete(id)}
                        onToggleButton={(choice) => onToggleButton(id, choice)}
                />
            </li>
        )
    });

    return (
        <AppList className='list-group'>
            {elements}
        </AppList>
    )
}

export default PostList;