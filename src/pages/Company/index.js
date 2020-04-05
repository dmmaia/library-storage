import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";

import api from '../../config/api';
import MainHeader from '../MainHeader';

import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function Company() {

  const [company, setCompany] = useState([]);

  useEffect(() => {
    async function loadContent(){
      const response = await api.get('/company');
      setCompany(response.data);
      console.log(response.data)
    }

    loadContent();
  }, []);

  return (
    <>
      <MainHeader />
      <table>
        <tr>
          <th>Editora</th>
        </tr>
        {
          company.map((data, index) => {
            return<tr key={index} className="content-data">
                    <td>{data.company_name}</td>
                    <a
                      onClick={async function () {
                        const responseDelete = await api.delete(`/company/${data.id}`)
                        setCompany(company.filter(company=>company.id !== data.id));
                    }}
                    >
                    <span><FaTrash /></span>
                    </a>
                    <Link to={`/edit/${data.id}/company`} >
                      <FaEdit />
                    </Link>
                  </tr> 
          })
        }
      </table>
    </>
  );
}
