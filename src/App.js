import React from 'react';
import TopSocial from './components/TopSocial';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
        showTooltip: false
    }
}

handleMouseEnter = () => {

    this.setState({
        showTooltip: true
    })
}

handleMouseLeave = () => {
    this.setState({
        showTooltip: false
    })
}

  render() {
    const display = this.state.showTooltip ? 'show' : 'none';
    return (
      <div>
        <div className="App">
          <h2> Tooltip components</h2>
        </div>
        {/* <TopSocial /> */}
        <TopSocial handleMouseEnter = {this.handleMouseEnter} handleMouseLeave = {this.handleMouseLeave} display={display}/>
        {/* <BottomSocial handleMouseEnter = {this.handleMouseEnter} handleMouseLeave = {this.handleMouseLeave} display={display}/> */}
        {/* <LeftSocial handleMouseEnter = {this.handleMouseEnter} handleMouseLeave = {this.handleMouseLeave} display={display}/> */}
      </div>
    );
  }
}

export default App;
