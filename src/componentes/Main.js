import { getByPlaceholderText } from '@testing-library/react';
import { useState, useEffect } from 'react';


// component Libraries
import { Route } from 'react-router-dom';

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

    const createPeople = async (person) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(person)
         
        })
    };

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <Route exact path="/">
                <Index people={people} createPeople={createPeople} />
            </Route>
            <Route path="/people/:id" render={(rp) => 
            <Show {...rp} />
            } />
            
        </main>
    );
}
export default Main;