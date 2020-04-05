import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";

import api from '../../config/api';
import MainHeader from '../MainHeader';

import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Genre() {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    async function loadContent(){
      const response = await api.get('/genre');
      setGenre(response.data);
    }

    loadContent();
  }, []);

  return (
    <>
      <MainHeader />
      <table>
        <tr>
          <th>Gênero Literário</th>
        </tr>
        {
          genre.map((data, index) => {
            return<tr key={index} className="content-data">
                    <td>{data.genre_name}</td>
                    <a
                      onClick={async function () {
                        const responseDelete = await api.delete(`/genre/${data.id}`)
                        setGenre(genre.filter(genre=>genre.id !== data.id));
                    }}
                    >
                    <span><FaTrash /></span>
                    </a>
                    <Link to={`/edit/${data.id}/genre`} >
                      <FaEdit />
                    </Link>
                  </tr> 
          })
        }
      </table>
    </>
  );
}
