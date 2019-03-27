import React, { Component } from "react";
import "./TodoItem.scss";
import classnames from "classnames";

class TodoItem extends Component {
  render() {
    const { onRemove } = this.props;
    return (
      <div>
        <input type="checkbox" checked={true} readOnly />
        <div>zzz</div>
        <div onClick={onRemove}>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;
