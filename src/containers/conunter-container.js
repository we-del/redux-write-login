import {
  createAdditionAction,
  createAsyncAddAction,
  createIsOddAction,
  createSubtractAction
} from '../redux/actions/counter_action'

// 给该文件添加属性
import Counter from '../components/counter'

// 获取整合容器，可直接给该元素添加redux对象，
import { connect } from 'react-redux'


export default connect(
  state => {
    console.log(state)
    return ({ count: state.count, person: state.person })
  }, {
  addition: createAdditionAction,
  subtract: createSubtractAction,
  asyncAdd: createAsyncAddAction
}
)(Counter)