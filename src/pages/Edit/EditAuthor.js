import React, { useState, useEffect } from 'react';

import MainHeader from '../MainHeader';
import api from '../../config/api';

import { useHistory } from "react-router-dom";

export default function NewRegister(props) {

  let history = useHistory();

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('M');
  const [nationality, setNationality] = useState('');

  async function handleAuthor(event){
    event.preventDefault();

    const data = {
      name: name,
      birth: birth,
      gender: gender,
      nationality: nationality
    }
    const response = await api.put(`/author/${props.id}`, data);

    setName('');
    setBirth('');
    setNationality('');

    history.push('/authors');
  }

  return (
    <>
    <MainHeader />
    <div className="content-newitem">
    <h2>Insira os Dados Para Edição!</h2>
      <form onSubmit={handleAuthor} className="newItem" >
        <input 
          type="text" 
          placeholder="Nome Autor"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Nascimento"
          value={birth}
          onChange={event => setBirth(event.target.value)}
          required
        />
        <select name="gender"
          value={gender}
          onChange={event => setGender(event.target.value)}
          required
        >
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        <input 
          type="text" 
          placeholder="Nacionalidade" 
          value={nationality}
          onChange={event => setNationality(event.target.value)}
          required
        />
        <input type="submit" value="Editar" className="btn-input" />
      </form>
      </div>
    </>
  );
}

