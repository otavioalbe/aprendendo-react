import React from 'react';

const BemVindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>Meu App</h1>
      <BemVindo nome="Otávio" idade="20"/>
      <p>Este é o meu app.</p>
    </div>
  );
}

export default App;