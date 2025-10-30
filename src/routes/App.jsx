import { HashRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from './home/HomePage';
import {NewTodoPage} from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/new' element={<NewTodoPage/>}/>
        <Route path='/edit/:id' element={<EditTodoPage/>}/>
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
