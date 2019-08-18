import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import First from './First';
import rootReducer from  './store/reducers/cricket.reducer';
import Second from  './Second';
import Pakistan from './Pakistan';
// let rootState={
//   count : 0
// }
// let rootReducer = (state=rootState,action)=>{
// switch(action.type){
// case 'INC':
// return {
//   count :  state.count+1
// }
// case 'DEC':
// return {
//   count : state.count-1
// }
// case 'ADD':
// return {
// count : state.count+action.val
// }
// }
// return state;
// }


let store1 = createStore(rootReducer);
let store2 = createStore(rootReducer);
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<div>
<Provider store={store1}><Second /></Provider>
<Provider store={store2}><Pakistan/></Provider>
</div>, document.getElementById('root'));
