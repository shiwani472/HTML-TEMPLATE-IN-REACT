import React, { Component } from 'react';

class Student extends Component
{
 state = {
name: "rahul"
};
render(){
  return <h1>how are you ,{this.state.name}</h1>;
}
}
export default Student;