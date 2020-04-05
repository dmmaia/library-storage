import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

export default function MainHeader() {
  return (
    <>
      <header className="main-header">
        <Link to="/" className="btn">Livros</Link>
        <Link to="/authors" className="btn">Autores</Link>
        <Link to="/companys" className="btn">Editoras</Link>
        <Link to="/genres" className="btn">Gêneros Literários</Link>
        <Link to="/new" className="btn">Adicionar Registro</Link>
      </header>
    </>
  );
}
