import React from 'react';
import ReactDOM from 'react-dom';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text,
    };
  }

  render() {
    return (
      <li className="list">
        <p
          className="list__input"
        >{this.state.text}</p>
        <button onClick={this.props.delete} className="del_btn">
          Delete
        </button>
      </li>
    );
  }
}
