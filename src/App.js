import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Form.css';
import './ToDoListItem.css';
// import Form from './Form.js';
// import ToDoListItem from './ToDoListItem.js';

class ToDoListItem extends React.Component {
  render() {
    // const title = this.props.title;
    // const description = this.props.description;

    return (
      // 必ず一つの親要素が必要
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">タスク名：{this.props.title}</div>
        <div className="ToDoListItem-description">説明：{this.props.description}</div>
      </div>
    );
  }
}

class ToDoList extends React.Component {
  render() {
    // TODO：ToDoの数だけToDoItemを表示する方法
    return (
      <ToDoListItem
        title={this.props.title}
        description={this.props.description}
      />
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      // TODO：入力値を受け渡す方法
      <div className="App">
        <form className="App-form" onSubmit={() => App.createToDoItem("あいうえお", "かきくけこ")}>
          <input type="text" id="title" placeholder="タスク名を入力してください"></input>
          <input type="text" id="description" placeholder="説明を入力してください"></input>
          <button type="submit" >登録</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoListTitle: "TEST",
      toDoListDescription: "This is a Test",
    };
  }

  createToDoItem(title, description) {
    const currentToDoList = this.state.toDoList;
    this.setState({
      toDoListTitle: title,
      toDoListTitle: description,
    })
  }

  render() {
    return (
      // 1Divしかだめなの？複数ならコンポーネント側でやってねということか。
      <div className="App">
        <Form />
        <ToDoList
          title={this.state.toDoListTitle}
          description={this.state.toDoListDescription}
        />
      </div>
    );
  }
}

export default App;
