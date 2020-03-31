import React from 'react';
import './Form.css';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Form extends React.Component {
  render() {
    return(
      <form className="App-form">
        <input type="text" placeholder="タスク名を入力してください"></input>
        <input type="text" placeholder="説明を入力してください"></input>
        <button type="submit">登録</button>
      </form>
    )
  }
}

export default Form;