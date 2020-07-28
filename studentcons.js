import React ,{Component} from "react";


class Studentcons extends  Component
{
constructor(props){
    super(props);
    this.state ={ name:"rahul",class:this.props.class};
}
render(){
    return(
   <h1>
       Hi I am {this.state.name} and my class is {this.props.class}
   </h1>     
    );
}

}
export default Studentcons;

