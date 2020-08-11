/**
 * Created by lenovo on 2017/6/13.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import modules from './modules';

console.log('aaaaabbbbcccc');
console.log('masteraddd');
console.log('mastercccc');

Vue.use(Vuex);

const state = {
  count:100,
  user_name: 'wesdg',
  todos: [
    { id: 1, text: 'id+1', done: true },
    { id: 2, text: 'id+2', done: false }
  ],
  todocTest: [
    { id: 1, text: 'id+1', done: true },
    { id: 2, text: 'id+2', done: false }
  ],
  hotelObj: {
    smallRooms: 234,
    bigRooms: 456
  },
  masterAdd: {
    a:12,
    b:23
  },
  masterCCC: {
    a:12,
    b:23
  },
  master0150: {
    a:12,
    b:23
  }
};

export default new Vuex.Store({
  modules,
  state,
  getters,
  actions,
  mutations
});
