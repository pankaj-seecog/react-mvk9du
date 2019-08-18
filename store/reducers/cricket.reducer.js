let iniState = {
  runs : 0,
  players : 11
}
let rootReducers = (state=iniState,action)=>{
switch(action.type){
case 'FOUR_RUNS':
return {
 ...state,
 runs : state.runs+4
}
case 'SIX_RUNS':
return {
  ...state,
  runs : state.runs+6
}
case 'out':
return {
  ...state,
  players : state.players-1
}
}
return state;
}

export default rootReducers;