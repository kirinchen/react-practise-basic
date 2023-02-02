import React, { Component } from 'react';

class TestComponent extends Component {

  render() {
    return (
      <div className="App">
        测试组件
        <UserPage>
          { (args)=><div>{args.name}</div> }
        </UserPage>
        <AppPages>
          { (args)=><div>我是AppPages组件的子元素 <p>{ args.name }</p></div> }
        </AppPages>
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

const AppPages = (props) =>{
   const Component = props.children;
   let ans= <div>
     hello 你好呀
     <Component name="ben" />
   </div>;
   
   return ans;
}

export default TestComponent;  
