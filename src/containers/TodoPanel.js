import React from 'react';

import TextBox from '../components/TextBox';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoListItem extends React.PureComponent {
  render(){
    // const searchtext = this.props.searchtext;
    console.log("sadasd",this.props.todos, this.props.searchtext);
    return(
      <div>
        <TextBox
          onChange={this.props.HandleSearchText}
          value={this.props.searchtext}
        />
      </div>
    )
  }
}
