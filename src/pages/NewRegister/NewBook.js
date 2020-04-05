import React, {useState, useEffect} from 'react';

import api from '../../config/api';

export default function NewBook() {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState(1);
  const [company, setCompany] = useState(1);
  const [genre, setGenre] = useState(1);

  const [authorOption, setAuthorOption] = useState([]);
  const [companyOption, setCompanyOption] = useState([]);
  const [genreOption, setGenreOption] = useState([]);

  useEffect(()=>{
    async function handleLoad(){
        const authorResponse = await api.get('/author');
        const companyResponse = await api.get('/company');
        const genreResponse = await api.get('/genre');
        setAuthorOption(authorResponse.data);
        setCompanyOption(companyResponse.data);
        setGenreOption(genreResponse.data);
    }

    handleLoad();
  }, [])

  async function handleBook(e){
    e.preventDefault();

    const data = {
      author_id: author,
      company_id: company,
      genre_id: genre,
      title: title,
      year: year
    }

    const response = await api.post('/book', data);

    setTitle('');
    setYear('');
  }

  return (
    <>
      <form onSubmit={handleBook} className="newItem" >
        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Lançamento"
          value={year}
          onChange={event => setYear(event.target.value)}
          required
        />
        <select name="Author"
          value={author}
          onChange={event => setAuthor(event.target.value)}
          required
        >
          <option value="0" selected="selected">Autor</option>
          {
            authorOption.map((data, index)=>{
              return (
                <option key={index} value={data.id}>{data.name}</option>
              )
            })
          }
          
        </select>

        <select name="company"
          value={company}
          onChange={event => setCompany(event.target.value)}
          required
        >
          <option value="0" selected="selected">Editora</option>
          {
            companyOption.map((data, index)=>{
              return (
                <option key={index} value={data.id}>{data.company_name}</option>
              )
            })
          }
        </select>

        <select name="genre"
          value={genre}
          onChange={event => setGenre(event.target.value)}
          required
        >
          <option value="0" selected="selected">Gênero</option>
         {
            genreOption.map((data, index)=>{
              return (
                <option key={index} value={data.id}>{data.genre_name}</option>
              )
            })
          } 
        </select>
        
        <input type="submit" value="Cadastrar" className="btn-input" />
      </form>
    </>
  );
}
