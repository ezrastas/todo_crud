import React from 'react';
import ReactDOM from 'react-dom';
//import Button from './Button';
//import ToDoList from './App'
import CRUD from './components/CRUD'

const MOUNT_NODE = document.getElementById('app');
ReactDOM.render(
  <CRUD />,
  MOUNT_NODE
);
