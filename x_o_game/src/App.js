import react from "react";
import '../src/App.css'

function App() {

  
const game=()=>{
console.log(5)

}


  return (
    <div className="App">
      <h1>The Winner is ..</h1>
    <table>
      <tbody>
        <tr>
          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
        </tr>
        <tr>
          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
        </tr>
        <tr>

          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
          <td onClick={game}>X</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;
