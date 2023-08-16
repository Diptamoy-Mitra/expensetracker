
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
function App() {
  // let expenseDate = new Date(2023, 8, 9);
  // let expenseTitle = 'School Fee';
  // let expenseAmount = 100;

  let expenses=[
    {
        id: 'e1',
        title:' school Fee',
        amount: '₹250',
        date: new Date(2023,8,9)
    },
    {
      id: 'e2',
      title:' Library Fee',
      amount: '₹250',
      date: new Date(2023,8,19)
    },
    {
      id: 'e3',
      title:' Bus Fee',
      amount: '₹250',
      date: new Date(2023,8,29)
    },

    {
      id: 'e4',
      title:' Books Fee',
      amount:'₹250',
      date: new Date(2023,8,11)
    }
  ]
  return (
    <div className="App">
      <h2>Lets Get Start</h2>
        <Expenses item={expenses}/> 
    </div>
  );
}

export default App;
