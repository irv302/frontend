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

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    useEffect(() => {
        getPeople();
    }, []);

    return (
        <main>
            <Route exact path="/">
                <Index people={people}/>
            </Route>
            <Route path="/people/:id" render={(rp) => 
            <Show {...rp} />
            } />
            
        </main>
    );
}
export default Main;