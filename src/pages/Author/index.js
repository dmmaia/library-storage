import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";

import api from '../../config/api';
import MainHeader from '../MainHeader';

import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Author() {

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    async function loadContent(){
      const response = await api.get('/author');
      setAuthor(response.data);
    }
    loadContent();
  }, []);

  return (
    <>
      <MainHeader />

      <table>
        <tr><th>Nome</th>
          <th>Ano de Nascimento</th>
          <th>Gênero</th>
          <th>Nacionalidade</th>
        </tr>
        {
          author.map((data, index) => {
            return<tr key={index} className="content-data">
                    <td>{data.name}</td>
                    <td>{data.birth}</td>
                    <td>{data.gender}</td>
                    <td>{data.nationality}</td>
                    <a
                      onClick={async function () {
                        const responseDelete = await api.delete(`/author/${data.id}`)
                        setAuthor(author.filter(author=>author.id !== data.id));
                    }}
                    >
                    <span><FaTrash /></span>
                    </a>
                    <Link to={`/edit/${data.id}/author`} >
                      <FaEdit />
                    </Link>
                  </tr> 
          })
        }
      </table>
    </>
  );
}
