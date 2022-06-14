// import { getByPlaceholderText } from '@testing-library/react';
import { useState, useEffect } from 'react';


// component Libraries
import { Route, } from 'react-router-dom';

// page components
import Index from '../pages';
import Show from '../pages/show';



const Main = (props) => {

    const [ people, setPeople ] = useState(null);

    const URL = 'http://localhost:4000/people';


// gives us updated list of people
    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    };

    const createPeople = async (updatePerson) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(person)
         
        })
    };

    const updatePeople = async (updatedPerson, id) => {
        await fetch (URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Aplication/json'
            },
            body: JSON.stringify(Person)
        });
        getPeople();
    }


    const deletePeople = async (id) => {
        await fetch (URL + id, {method: DELETE});
    }
    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
        <switch>
            <Route exact path="/">
                <Index people={people} createPeople={createPeople} />
            </Route>
            <Route path="/people/:id" render={(rp) => (
              <Show
              {...rp}
              people={people}
              updatePeople={updatePeople}
              deletePeople={deletePeople}
              
            />
          )}
        />
      </switch>
        </main>
    );
}
export default Main;