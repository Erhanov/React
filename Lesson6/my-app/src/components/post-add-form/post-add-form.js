import React, {Component} from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.form`
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;

export default class PostAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.text !== '') {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    render() {
        return (
            <BottomPanel 
                className='d-flex'
                onSubmit={this.onSubmit}>
                <Input
                    type='text'
                    placeholder='О чем вы сейчас думаете?'
                    className='form-control'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type='submit'
                    outline color="secondary"
                >
                    Добавить</Button>
            </BottomPanel>
        )
    }
}
