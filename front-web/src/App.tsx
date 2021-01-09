import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Orders/Routes';

function App() {
  return (
    <>

     <Routes />
    <ToastContainer />

    </>
  );
}

export default App;
