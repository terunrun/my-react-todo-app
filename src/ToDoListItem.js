import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends React.Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;

    return (
      // 必ず一つの親要素が必要
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;