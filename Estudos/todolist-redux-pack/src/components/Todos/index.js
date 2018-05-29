import React, { Component } from 'react';
import "./style.css";

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.props.actions.loadTodos()
    }
    onChangeContent = (item, content) => {
        item.content = content

        this.props.actions.editTodo(item);
    }

    render() {
        const { todos } = this.props;
        console.log(todos)
        return (
            <div>
                <h3>Lista de todos</h3>
                {todos.items.map((item, index) => (
                    <div key={index}>
                        <input type="text" onChange={(content) => { this.onChangeContent(item, content.target.value) }} value={item.content} />
                        <span className="delete-item" onClick={() => this.props.actions.removeTodo(item.id).then(() => this.props.actions.loadTodos())}> Deletar</span></div>
                ))}
            </div>
        )
    }
}

export default Todos;