import React, { PropTypes } from 'react';
import ControlBar from '../components/ControlBar'
import VisibleSnipps from '../containers/VisibleSnipps'
import Todo from '../components/Todo'
import { updateName } from '../actions/ElephantSnippActionCreators'


export default class SnippsPage extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className = 'container'>
        <div className= 'row'>
          <div className = 'col-sm-12'>

      <ControlBar />
      <VisibleSnipps />
        <h3>
          Hello, {this.props.name}!
        </h3>
      </div>
    </div>
  </div>
    );
  }
}
