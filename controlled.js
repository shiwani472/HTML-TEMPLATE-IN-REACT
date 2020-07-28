 
 
 import React,{Component} from 'react';
 class Control extends Component{
     constructor(props){
     super(props)
this.state =
{
name:" "
};
     }
myHandle = (e) =>
this.setState({name:e.target.value.toUpperCase()})

     render(){
return(
<div>
<form>
<h1>controlled by react</h1>
<input  type="text" value={this.state.name} onChange={this.myHandle}/>
</form>
</div>
);
 }
 }
 export default Control;