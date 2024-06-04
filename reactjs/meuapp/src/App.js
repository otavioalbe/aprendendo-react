import React, {Component} from 'react';
import Feed from './components/feed/';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    feed:[
      {id: 1, username: 'Mateus', curtidas: 10, comentarios: 2},
      {id: 2, username: 'Lucas', curtidas: 120, comentarios: 52},
      {id: 3, username: 'João', curtidas: 1000, comentarios: 200},
      {id: 4, username: 'Maria', curtidas: 1, comentarios: 0},
    ]
  };
}


  render(){
    return(
      <div>
        
        {this.state.feed.map((item)=>{
          return(
            <Feed id={item.id} username={item.username}
            curtidas={item.curtidas} comentarios={item.comentarios} />
          );
        })}

      </div>
    );
  }

}

export default App;