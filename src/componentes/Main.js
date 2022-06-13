// component Libraries
import { Route } from 'react-router-dom';

// page components
import Index from '../pages';
import Show from '../pages/show';



const Main = (props) => {
    return (
        <main>
            <Route exact path="/">
                <Index />
            </Route>
            <Route path="/people/:id" render={(rp) => 
            <Show {...rp} />
            } />
            
        </main>
    );
}
export default Main;