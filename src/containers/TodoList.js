import React from 'react';
import { uniqueId } from 'lodash'

import TodoListItem from './TodoListItem';
import TodoPanel from './TodoPanel';

export default class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    const onDeleteTodo = this.props.onDeleteTodo;
    const onUpdateTodo = this.props.onUpdateTodo;

    return (
      <div>
        {todos.map((todo, index) => {
          return (
            <div>
              <TodoPanel

              />
              <TodoListItem
                key={uniqueId()}
                todo={todo}
                index={index}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
