import React, {useState, form, label} from 'react';
import Check from './components/check/check'
import MyForm from './components/form/form'

function App() {

  const [name, setName] = useState("John Doe");
  const [street, setStreet] = useState("333 John Doe Ave");
  const [city, setCity] = useState("Cedar Rapids");
  const [state, setState] = useState("IA");

  const [amount, setAmount] = useState(333)
  const [date, setDate] = useState("1/2/1999");

  return (
    <div className="App">
      <div>
      <MyForm setAmount={setAmount} setName={setName} setStreet={setStreet} setCity={setCity} setState={setState} setStreet ={setStreet} state={state} city ={city} name={name}  street={street} amount={amount} date={date} />
      </div>
      <Check state={state} city ={city} name={name}  street={street} amount={amount} date={date}/>
    </div>
  );
}

export default App;
