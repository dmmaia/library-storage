import React from 'react';

import EditBook from './EditBook';
import EditAuthor from './EditAuthor';
import GeralEdit from './GeralEdit';

export default function Edit({match}) {

  const config = match.params;

  function displayForm(t){
    let display;
    switch(t){
      case 'book':
        display = <EditBook id={config.id}/>;
        break;
      case 'author':
        display = <EditAuthor id={config.id} />;
        break;
      case 'genre':
        display = <GeralEdit id={config.id} type='genre'/>;
        break;
      case 'company':
        display = <GeralEdit id={config.id} type='company'/>;
        break;
    }

    return display;
  }

  return (
    <>
      <form>
        {
          displayForm(config.type)
        }
      </form>
    </>
  );
}
