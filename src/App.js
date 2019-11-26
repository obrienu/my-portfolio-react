import React, {Component} from 'react';
import './App.css';
import HomeUi from './Components/Home/HomeUi'
import About from './Components/About/AboutUi';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


render(){
  const { width } = this.state;
  return (
    <div className="App">
      <HomeUi width = {width} />
      <About width = {width} />
    </div>
  );
}
 
}

export default App;
