import { get, post, remove, patch } from '../modules/request';

export function loadTodos() {
    return {
        type: "LOAD_TODOS",
        promise: get('todos')
    }
}

export function addTodo(content) {
    return {
        type: 'ADD_TODO',
        promise: post('todos', content),
        meta: {
            onSuccess: (resultado, getState) => {
                //console.log('cadastrado com sucesso')
            },
            onFailure: (resultado) => {
                //console.log('erro')
            }
        }
    }
}

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        promise: remove(`todos/${id}`, id)
    }

}

export function editTodo(content) {
    return {
        type: 'EDIT_TODO',
        promise: patch(`todos/${content.id}`, content),
        meta: {
            onSuccess: (resultado, getState) => {
            }
        }
    }
}