import React from 'react';
import TopSocial from './components/TopSocial';


class App extends React.Component {

  constructor() {
    super();
    this.select = React.createRef();

    this.state = {
      position : ''
    }
}

handleChange = () => {

    this.setState({
        position : this.select.current.value
    })
}



  render() {

    return (
      <div>
        <div className="App">
          <h2> Tooltip components</h2>
        </div>

        <div className="menu-container">
          <h4>Position : </h4>
          <select name="position"
                  ref = {this.select}
                  onChange = {this.handleChange}
          >
          <option value="option">Select Position</option>
          <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>

        <TopSocial position={this.state.position}/>

      </div>
    );
  }
}

export default App;
