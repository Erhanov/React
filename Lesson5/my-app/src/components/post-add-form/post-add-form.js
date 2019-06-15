import React from 'react';
import { Button, Input} from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.div`
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;

const PostAddForm = ({onAdd}) => {
    return (
        <BottomPanel className='d-flex'>
            <Input
                type='text'
                placeholder='О чем вы сейчас думаете?'
                className='form-control'
            />
            <Button
                type='submit'
                outline color="secondary"
                onClick={() => onAdd('Hello')}
            >
                Добавить</Button>
        </BottomPanel>
    )
}

export default PostAddForm;