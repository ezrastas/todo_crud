import React from 'react';

import TextBox from '../components/TextBox';
import Button from '../components/Button';
import SelectBox from '../components/SelectBox';
import types from '../constants';

export default class TodoListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      newTodoText: this.props.todo.text,
      newTodoType: this.props.todo.type,
    }
  }

  handlerDeleteTodo = () => {
    const onDeleteTodo = this.props.onDeleteTodo;
    const index = this.props.index;
    onDeleteTodo(index);
  };

  handlerUpdateTodo = () => {
    this.setState({ isEditable: true });
  };

  handlerUpdateText = value => {
    this.setState({ newTodoText: value });
  };

  handlerUpdateType = value => {
    this.setState({ newTodoType: value });
    console.log(this.state.newTodoType);
  };

  handlerSaveUpdate = () => {
    const onUpdateTodo = this.props.onUpdateTodo;
    const index = this.props.index;
    const todo = {
      text: this.state.newTodoText,
      type: this.state.newTodoType,
    };
    onUpdateTodo(todo,index);
  };

  handlerCancelUpdate = () => {
    this.setState({
      isEditable: false,
      newTodoText: this.props.todo.text,
      newTodoType: this.props.todo.type,
    });
  };

  renderTodo = () => {
    const todo = this.props.todo;
    const handlerDeleteTodo = this.handlerDeleteTodo;
    const handlerUpdateTodo = this.handlerUpdateTodo;
    //const onDeleteTodo = this.props.onDeleteTodo;
    return (
      <div>
        <strong>{todo.type}</strong>
        <span>{todo.text}</span>
        <Button onClick={handlerDeleteTodo}> Удалить </Button>
        <Button onClick={handlerUpdateTodo}> Изменить </Button>
      </div>
    );
  };

  renderUpdate = () => {
    const text = this.state.newTodoText;
    const type = this.state.newTodoType;
    return (
      <div>
        <SelectBox
          options={types}
          value={type}
          onChange={this.handlerUpdateType}
        />
        <TextBox onChange={this.handlerUpdateText} value={text} />
        <Button onClick={this.handlerSaveUpdate}> Сохранить </Button>
        <Button onClick={this.handlerCancelUpdate}> Отмена </Button>
      </div>
    );
  };

  render(){
    const isEditable = this.state.isEditable;
    return isEditable ? this.renderUpdate() : this.renderTodo();
  }
}
