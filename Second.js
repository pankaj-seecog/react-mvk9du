import React from 'react';
import {connect} from 'react-redux';
class  Second extends React.Component{

render(){
  return (
    <div style={{"border":"3px solid pink","margin" : "10px","padding" : "10px"}}>
Total Runs : {this.props.comRuns}<br/>
Total Players : {this.props.comPlayers}
<hr/>
<button onClick={this.props.comFourRuns}>4 Runs</button> |
<button onClick={this.props.comSixRuns}>6 Runs</button> | 
<button onClick={this.props.comOut}>Out</button> 
    </div>
  )
}

}

//map the state of store to props of Second component
let mapStateToProps = (state)=>{
  return {
    comRuns : state.runs,
    comPlayers : state.players
  }
}

let mapDispatchToProps = (dispatch)=>{
return {
  comFourRuns : ()=>dispatch({type : 'FOUR_RUNS'}),
  comSixRuns : ()=>dispatch({type : 'SIX_RUNS'}),
  comOut : ()=>dispatch({type :'out'})
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Second);