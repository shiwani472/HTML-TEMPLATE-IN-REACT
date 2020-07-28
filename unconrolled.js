import React,{Component} from 'react';
class Uncontrol extends Component{
constructor(props){
    super(props);
    this.state = {value:""};

    this.myRef=React.createRef(); //create the refs using method
}
myEvent = e =>
{
    e.preventDefault();
    //console.log(this.myRef.current);
    this.setState({value:this.myRef.current.value);
};

render(){
return(
  <React.Fragment>
  <h2>you typed {this.state.value}</h2>
  <form onSubmit={this.myEvent}>
  <input type="text" ref={this.myRef}/>
  <input type="submit" value="submit"/>
  </form>
  </React.Fragment>
);
} 
}
export default Uncontrol;
