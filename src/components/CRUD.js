import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

export default class CRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      NewField: '',
    };
  }

  handleNewField(e) {
    this.setState({ NewField: e.target.value });
  }

  generateID() {
    return Math.random()
      .toString()
      .substring(2);
  }

  CreateField() {
    const list = {
      id: this.generateID(),
      text: this.state.NewField,
    };
    if(list.text){
      this.setState({
        fields: [].concat(list, this.state.fields),
        NewField: '',
      });
    }
  }

  DeleteField(id) {
    this.setState({
      fields: this.state.fields.filter(list => {
        return list.id !== id;
      }),
    });
  }

  render() {
    const fields = this.state.fields.map(list => {
      console.log('1');
      return (
        <List
          key={this.generateID()}
          id={this.generateID()}
          text={list.text}

          delete={e => this.DeleteField(list.id, e)}
        />
      );
    });
    return (
      <div className="list">
        <div className="field">
          <input
            value={this.state.NewField}
            onChange={e => {
              this.handleNewField(e);
            }}
          />
          <button
            className="add-field"
            onClick={() => {
              this.CreateField();
            }}>
            Add
          </button>
        </div>
        <ul>{fields}</ul>
      </div>
    );
  }
}
