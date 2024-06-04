import React, {Component} from 'react';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
   email: '',
   senha: '',
   sexo: 'Masculino'
  };
  this.trocaEmail = this.trocaEmail.bind(this);
  this.trocaSexo = this.trocaSexo.bind(this);
}

trocaSexo(e){
  let valorDigitado = e.target.value;
  this.setState({sexo: valorDigitado})
}

trocaEmail(event){
  let valorDigitado = event.target.value;
  this.setState({email:valorDigitado})
}


  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email}
          onChange={this.trocaEmail}  />
        <br/>
        Senha:
        <input type="password" name="senha" value={this.state.senha}
           onChange={(event) => this.setState({senha: event.target.value})}
        /> <br/>
        Sexo:
        <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>


        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>

      </div>
    );
  }

}

export default App;