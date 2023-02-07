import React, { Component } from 'react';

class TestComponent extends Component {

  render() {
    return (
      <div className="App">
        测试组件
        <UserPage>
          {(args) => <div>{args.name}</div>}
        </UserPage>
        <AppPages>
          {(args) => <div>我是AppPages组件的子元素 <p>{args.name} {args.idx}</p></div>}
        </AppPages>
      </div>
    );
  }
}

class UserPage extends Component {

  render() {
    return <div>
      hello word
      {this.props.children({ name: "ben" })}
    </div>
  }
}

const genRow = (idx) => {
  return <div>
    ROW = {idx}
  </div>
}

const AppPages = (props) => {
  const Component = props.children;
  //  let ans=;
  let list = new Array([]);
  for (let i = 0; i < 10; i++) {
    list.push(<div>
      hello 你好呀
      <Component name="ben" idx={i} />

    </div>);
    list.push(genRow(i));
  }

  return list;
}



export default TestComponent;  
