import Navbar from "./components/navbar/Navbar"
import './App.css';
import Budget from "./components/budget-add/Budget";
import Expenses from "./components/expenses/Expenses";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Budget/>
      <Expenses/>
    </div>
  )
}

export default App
