import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentWillMount(){
    console.log('Vai montar!!!');
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleTimeString()})
    },1000)
  }

  componentDidUpdate(){
    console.log('Atualizou!!!');
  }

  //shouldComponentUpdate(){
  //  return true;
  //}

  render(){
    return(
      <div>
        <h1>Meu App {this.state.hora}</h1>
      </div>
    );
  };
}

export default App;