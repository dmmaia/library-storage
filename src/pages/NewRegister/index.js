import React, { useState } from 'react';

import MainHeader from '../MainHeader';
import api from '../../config/api';
import NewBook from './NewBook';

export default function NewRegister() {

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('M');
  const [nationality, setNationality] = useState('');

  const [company_name, setCompanyName] = useState('');

  const [genre_name, setGenreName] = useState('');

  async function handleAuthor(event){
    event.preventDefault();

    const data = {
      name: name,
      birth: birth,
      gender: gender,
      nationality: nationality
    }
    const response = await api.post('/author', data);

    setName('');
    setBirth('');
    setNationality('');
  }

  async function handleGenre(event){
    event.preventDefault();

    const response = await api.post('/genre', {genre_name:genre_name});

    setGenreName('');
  }

  async function handleCompany(event){
    event.preventDefault();

    const response = await api.post('/company', {company_name:company_name});

    setCompanyName('');
  }

  return (
    <>
      <MainHeader />
      <div className="content-newitem">

      <h2>Novo Livro</h2>
      <NewBook />

      <h2>Novo Autor</h2>
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
        <input type="submit" value="Cadastrar" className="btn-input" />
      </form>

      <h2>Novo Gênero Literário</h2>
      <form onSubmit={handleGenre} className="newItem">
        <input 
          type="text" 
          placeholder="Gênero" 
          value={genre_name}
          onChange={event => setGenreName(event.target.value)}
          required
        />
        <input type="submit" value="Cadastrar" className="btn-input" />
      </form>

      <h2>Nova Editora</h2>
      <form onSubmit={handleCompany} className="newItem">
        <input 
          type="text" 
          placeholder="Editora"
          value={company_name}
          onChange={event => setCompanyName(event.target.value)}
          required
        />
        <input type="submit" value="Cadastrar" className="btn-input" />
      </form>

      </div>
    </>
  );
}
