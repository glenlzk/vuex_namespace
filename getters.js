/**
 * Created by lenovo on 2017/6/13.
 */


export default {
  doneTodos: state => {     // 第一个参数是:state
    return state.todos.filter(todo => todo.id == 1)
  },
  addMoreOne: (state, getters) => {  // 第二个参数是:getters
    return state.count + getters.doneTodos.length;
  },
  glen: (state, getters) => {
    console.log('glen test....');
  },
  selina: (state, getters) => {
    console.log('selina test....');
  },
  master0150: (state, getters) => {
    console.log('selina test....');
  }
};
