import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './components/Display/Display';
import Key from './components/Keys/Key';
import { getDisplay } from "./store/Selector";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Display display={this.props.display} />
        </div>
        <div>
          <Key display={this.props.display} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const displayValue = getDisplay(state);
  return ({
    display: displayValue,
  });
};
export default connect(mapStateToProps, null)(App);