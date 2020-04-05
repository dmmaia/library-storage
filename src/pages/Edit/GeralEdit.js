import React, {useState} from 'react';

import MainHeader from '../MainHeader';
import api from '../../config/api';

import { useHistory } from "react-router-dom";

export default function GeralEdit(props) {

  let history = useHistory();

  const[name, setName] = useState('');

  async function handleChange(event){
    event.preventDefault();

    if(props.type === 'genre'){
      const response = await api.put(`/genre/${props.id}`, {genre_name:name});
      setName('');
      history.push('/genres');
    }else{
      const response = await api.put(`/company/${props.id}`, {company_name:name});
      setName('');
      history.push('/companys');
    }

  }

  return (
    <>
      <MainHeader />
      <div className="content-newitem">
        <h2>Insira os Dados Para Edição!</h2>
        <form onSubmit={handleChange} className="newItem" >
        <input 
          type="text"  
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <input type="submit" value="Editar" className="btn-input" />

        </form>
      </div>
    </>
  );
}
