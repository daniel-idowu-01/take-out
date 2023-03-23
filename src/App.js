import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {

  const [page, setPage] = useState(true)

  const changePage = () => {
    setPage(!page)
  }

  return (
    
    <div className="App h-screen md:overflow-y-hidden">

      <div>
        {page && <Login />}
        {!page && <Register />}


      {/* Login and Register Toggle */}
        <p
       className={` ${page ? 'md:bottom-64 md:mt-5 md:relative': 'pb-5 md:pb-0 md:bottom-20 md:left-96 md:mt-0 md:absolute' } mt-2 md:ml-96 login-btn text-sm text-center`}>
         { page ? 'Don\'t have an account? ' : 'Have an account? ' }
         <span onClick={changePage} className=' text-border-color cursor-pointer'>
           { page ? 'Register' : 'Login' } 
           </span> here
        </p>


      </div>

    </div>
  );
}

export default App;
