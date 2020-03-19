import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'

let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    const {getList, hhh} = this.props;
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={getList}
      >Press to see News</button>
    );
  }

};

export default Button;
