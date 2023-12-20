import React, {Component} from 'react'
import Ad from './Ad'

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.show ? '광고 감추기' : '광고 보이기'}
        </button>
        <Ad show={this.state.show} />
      </div>
    );
  }
}

export default AdPage;