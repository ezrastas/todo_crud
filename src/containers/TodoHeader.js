import React from 'react';

import TextBox from '../components/TextBox';
import Button from '../components/Button';
import SelectBox from '../components/SelectBox';
import types from '../constants';

export default class TodoHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: undefined,
      newTodoType: 'high',
    };
  }

  onAddNewTodo = () => {
    const newTodo = {
      text: this.state.newTodoText,
      type: this.state.newTodoType,
    };
    this.setState(
      {
        newTodoText: undefined,
      },
      () => this.props.onAddTodo(newTodo),
    );
  };

  handleNewText = value => {
    this.setState({ newTodoText: value });
  };

  handleNewType = value => {
    this.setState({ newTodoType: value });
  };

  render() {
    const NewTodoText = this.state.newTodoText;
    const NewTodoType = this.state.newTodoType;
    return (
      <div>
        <SelectBox
          options={types}
          value={NewTodoType}
          onChange={this.handleNewType}
        />
        <TextBox onChange={this.handleNewText} value={NewTodoText} />
        <Button onClick={this.onAddNewTodo}> Добавить </Button>
      </div>
    );
  }
}
