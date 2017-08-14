import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
    this.recipeAdd = this.recipeAdd.bind(this);
  }
  recipeAdd(e) {
    console.log(1, e);
    e.preventDefault();
    document.getElementById('dialog').close();
  }
  render() {
    return (
      <div className="App">
      <Dialog recipeAdd={this.recipeAdd}></Dialog>
      <button onClick={() =>(document.getElementById('dialog')).showModal()}> Add Recipre</button>
      
      </div>
    );
  }
}
class Dialog extends Component {
  render() {
    const {
      recipeAdd
    } = this.props;
    return (
      <dialog open id="dialog">
      <form>
        Recipe : <br/>
        <input type="text" placeholder="Recipe Name"/> <br/>
        Ingredients : <br/>
        <input type="text" placeholder="Enter Ingredients,Seperated"/>
        <menu>
          <button onClick={(e)=> {recipeAdd(e)}}>Cancel</button>
          <button type="submit">Confirm</button>
        </menu>
        </form>
      </dialog>
    )
  }
}

class RecipeList extends Component {
  render() {
    return (
      <div className="container">
        
      </div>
    )
  }
}

class RecipeItem extends Component {
  render() {
    return
  }
}
class RecipeAdd extends Component {
  render() {
    return
  }
}


export default App;