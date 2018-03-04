import React from 'react';
import { uniqueId } from 'lodash'

import TodoListItem from './TodoListItem';
import TodoPanel from './TodoPanel';

export default class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: undefined,
    }
  }

  HandleSearchText = value => this.setState({ searchtext: value });

  render() {
    //const todos = this.props.todos;
    const onDeleteTodo = this.props.onDeleteTodo;
    const onUpdateTodo = this.props.onUpdateTodo;

    const searchtext = this.state.searchtext;
    // const todos = this.props.todos;
    const todos = searchtext
      ? this.props.todos.filter(
      todo => todo.text.indexOf(searchtext) != -1
      )
      : this.props.todos;
    return (
      <div>
        <TodoPanel
          todos={todos}
          HandleSearchText={this.HandleSearchText}
          searchtext={searchtext}
        />
        {todos.map((todo, index) => {
          return (
              <TodoListItem
                key={uniqueId()}
                todo={todo}
                index={index}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
          );
        })}
      </div>
    );
  }
}
