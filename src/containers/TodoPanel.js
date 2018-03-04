import React from 'react';

import TextBox from '../components/TextBox';
import Radio from '../components/Radio';
import types from '../constants';

export default class TodoPanel extends React.PureComponent {
  render() {
    return (
      <div>
        <TextBox
          onChange={this.props.HandleSearchText}
          value={this.props.searchtext}
        />
        <Radio
          options={types}
          value={this.props.searchtype}
          onChange={this.props.HandleSearchType}
        />
      </div>
    );
  }
}
