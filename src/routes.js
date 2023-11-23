import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Lamps from './pages/Lamps';
//import NewUpdate from './pages/NewUpdate';

export default function LampsRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lamps />} />
      </Routes>
    </BrowserRouter>
  );
}
