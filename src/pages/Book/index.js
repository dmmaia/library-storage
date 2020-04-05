import React, { useState, useEffect } from 'react';

import { FaTrash, FaEdit } from "react-icons/fa";

import api from '../../config/api';
import MainHeader from '../MainHeader';


import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Book() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    async function loadContent(){
      const response = await api.get('/book');
      setBook(response.data);
    }

    loadContent();
  }, []);

  return (
    <>
      <MainHeader />
      <table>
        <tr><th>Título</th>
          <th>Autor</th>
          <th>Gênero Literário</th>
          <th>Editora</th>
          <th>Ano Lançamento</th>
        </tr>
        {
          book.map((data, index) => {
            return<tr key={index} className="content-data">
                    <td>{data.title}</td> 
                    <td>{data.name}</td>
                    <td>{data.genre_name}</td>
                    <td>{data.company_name}</td>
                    <td>{data.year}</td>
                    <a
                      onClick={async function () {
                        const responseDelete = await api.delete(`/book/${data.id}`)
                        setBook(book.filter(book=>book.id !== data.id));
                    }}
                    >
                    <span><FaTrash /></span>
                    </a>
                    <Link to={`/edit/${data.id}/book`} >
                      <FaEdit />
                    </Link>
                  </tr> 
          })
        }
      </table>
    </>
  );
}
