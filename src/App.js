import { Component } from "react"
import Productos from "./components/Productos"

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arvejas", price: 2500, img: "/productos/arvejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ]
  }
  render() {
    return (
      <div>
        <Productos 
        agregarAlCarro={() => console.log("no hace nada")}
        productos={this.state.productos}
        />
      </div>
    )
  }
}


export default App;
