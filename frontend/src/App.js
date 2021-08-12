import './App.css';
import React from 'react'
import axios from 'axios'
import DataTablesComp from './DataTableComp'


function App() {

  const [name, setName] = React.useState('')
  const [data, setData] = React.useState('')
  const handleChangeInput = e =>{
    const {value} = e.target
    setName(value)
    console.log(value)
  }

  const searchName = async() =>{

    try {
      console.log("buscar nome: "+name)
      await axios.get('http://localhost:5000/user/infor', {headers: {name}})
        .then((list) =>{
          setData(list.data.data)
          console.log(list.data.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="main">
      <input name="name" onChange={handleChangeInput} placeholder="Seu nome"></input>
      <button onClick={searchName} >Buscar</button>
      <div className="output">
        <DataTablesComp  data={data}/>
      </div>

    </div>
  );
}

export default App;
