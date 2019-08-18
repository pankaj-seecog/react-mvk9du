import React from 'react';
import {connect} from  'react-redux';
class First extends React.Component{
render(){
  return (
    <div>
The count is {this.props.comCount}
<br/>
<button onClick={this.props.comInc}>++</button> |
  <button onClick={this.props.comDec}>--</button> | 
  <button onClick={this.props.comAdd}>Add 5</button>
    </div>
  )
}
}

//here we need to map the state of store to the props of new Component
let mapStateToProps = (state)=>{
  return {
    comCount : state.count
  }
}

let  mapDispatchToProps = (dispatch)=>{
  return {
    comInc : ()=>dispatch({type :  'INC'}),
    comDec : ()=>dispatch({type : 'DEC'}),
    comAdd : ()=>dispatch({type : 'ADD',val : 5})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(First);