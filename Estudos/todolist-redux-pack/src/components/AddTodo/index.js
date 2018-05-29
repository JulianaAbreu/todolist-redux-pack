import React, { Component } from 'react';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
        }
    }

    onChangeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    validFields = () => {
        const { content } = this.state;
        if (!content) {
            return false
        } 
        return true
    }

    onSubmitContent = (e) => {
        e.preventDefault();
        const { content } = this.state;
        if (this.validFields()) {
            const newContent = {
                content: content
            };
            this.props.actions.addTodo(newContent).then(() => {
                this.props.actions.loadTodos();
            });
        }
        this.setState({
            content: content
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitContent}>
                <input type="text" placeholder="Tarefa a fazer" onChange={this.onChangeContent} />
            </form>
        )
    }
}

export default AddTodo;