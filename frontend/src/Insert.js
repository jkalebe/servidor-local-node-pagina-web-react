import React from 'react';
import './App.css';
import axios from 'axios'

const initialState = {
    name: '',
    idade: 0,
    cpf: '',
    data_nasc: ''
}

const Insert = () => {

    const [user, setUser] = React.useState(initialState)
    const [message, setMessage] = React.useState(false)


    const handleChangeInput = e => {
        setMessage(false)
        const { name, value } = e.target
        
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const sendData = async() => {
        try {
            const res = await axios.post('http://localhost:5000/user/register', user)
            console.log(res.data)
            if(res.data.message == "success")
                setMessage(true)
            console.log(user)
        } catch (error) {
            
        }
    }

    return (
        <div>
            <input onChange={handleChangeInput} name="name" placeholder="Seu nome"></input>
            <input onChange={handleChangeInput} name="idade" placeholder="Idade"></input>
            <input onChange={handleChangeInput} name="cpf" placeholder="CPF"></input>
            <input onChange={handleChangeInput} name="data_nasc" placeholder="Data de Nascimento"></input>

            <button style={message ? {backgroundColor: '#7d7'} : {backgroundColor: '#111'}} onClick={sendData}>{message ? 'Enviado' : 'Enviar'}</button>
        </div>
    )
}

export default Insert