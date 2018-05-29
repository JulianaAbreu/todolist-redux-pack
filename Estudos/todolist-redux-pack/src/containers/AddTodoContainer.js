import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todosActions from '../actions/todosAction';
import AddTodo from '../components/AddTodo';

const mapStateToProps = ({ todos }) => ({
    todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...todosActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);