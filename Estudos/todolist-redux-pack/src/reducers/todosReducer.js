import { handle } from 'redux-pack';

const initialState = {
    isLoading: false,
    error: null,
    items: []
}

export default function TodosReducer(state = initialState, action) {
    const { type, payload, data, index, name } = action;
    switch (action.type) {
        case 'LOAD_TODOS':
            return handle(state, action, {
                start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
                finish: (prevState) => ({ ...prevState, isLoading: false }),
                failure: (prevState) => ({ ...prevState, error: 'erro' }),
                success: (prevState) => ({ ...prevState, items: payload })
            })
        case 'ADD_TODO':
            console.log(payload);
            return handle(state, action, {
                start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
                finish: (prevState) => ({ ...prevState, isLoading: false }),
                success: (prevState) => ({ ...prevState, items: prevState.items.concat(payload) }),
                failure: (prevState) => ({ ...prevState, error: 'erro' }),
            })
        case 'REMOVE_TODO':
            console.log(payload)
            return handle(state, action, {
                start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
                finish: (prevState) => ({ ...prevState, isLoading: false }),
                success: (prevState) => ({ ...prevState, items: prevState.items.filter(item => item.id !== action.id) }),
                failure: (prevState) => ({ ...prevState, error: 'erro' })
            })
        case 'EDIT_TODO':
            return handle(state, action, {
                start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
                finish: (prevState) => ({ ...prevState, isLoading: false }),
                success: (prevState) => ({ ...prevState, items: prevState.items.map((item, i) => { if (i === index) { item.content = name } return item }) }),
                failure: (prevState) => ({ ...prevState, error: 'erro' })
            })
        default:
            return state;
    }
}