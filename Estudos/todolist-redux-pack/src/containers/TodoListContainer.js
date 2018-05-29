import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as todosActions from '../actions/todosAction';
import Todos from '../components/Todos';

const mapStateToProps = ({ todos }) => ({
    todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...todosActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);