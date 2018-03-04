import React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default class TodoApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  onAddTodo = todo => {
    const { todos } = this.state;
    this.setState({ todos: [...todos, todo] });
  };

  onDeleteTodo = index => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_, i) => {
        return i !== index ? todos[i] : '';
      }),
    });
  };

  onUpdateTodo = (todo, i) => {
    const todos = this.state.todos.slice();
    todos[i] = todo;
    this.setState({ todos });
  };

  render() {
    const onDeleteTodo = this.onDeleteTodo;
    const onUpdateTodo = this.onUpdateTodo;
    const { todos } = this.state;
    return (
      <div>
        <TodoHeader onAddTodo={this.onAddTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      </div>
    );
  }
}
