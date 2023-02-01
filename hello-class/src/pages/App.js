import React, { Component } from 'react';

class TestComponent extends Component {

  render() {
    return (
      <div className="App">
        测试组件
        <UserPage>
          { (args)=><div>{args.name}</div> }
        </UserPage>
      </div>
    );
  }
}

class UserPage extends Component {

   render(){
     return <div>
       hello word
       { this.props.children({ name:"ben" }) }
     </div>
   }
}

export default TestComponent;  
