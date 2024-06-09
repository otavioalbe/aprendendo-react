import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      form:{
        nome: '',
        email: '',
        senha: ''
      }
    }
    this.mudaDados = this.mudaDados.bind(this);
  }


  mudaDados(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render(){
    return(
      <div>
        
        <h1>Novo usuário</h1>
        <form>

          <label>Nome:</label>
          <input type="text" name="nome" value={this.state.form.nome} 
          onChange= {this.mudaDados} />
          
          <br/>

          <label>E-mail:</label>
          <input type="email" name="email" value={this.state.form.email} 
          onChange= {this.mudaDados} />
        
          <br/>

          <label>Senha:</label>
          <input type="password" name="senha" value={this.state.form.senha} 
          onChange= {this.mudaDados} />

          <br/>

          <button type="submit">Cadastrar</button>

        </form>

        <h1>Nome: {this.state.form.nome}</h1>
        <h1>E-mail: {this.state.form.email}</h1>
        <h1>Senha: {this.state.form.senha}</h1>

      </div>
    );
  }
}

export default App;