import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userAction';
import store from './store'


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">


      <Header />
        <div className='container container-fluid'>
          <Routes>
             {/* <Route path='/' Component={Home} exact /> */}
             {/* <Route path='/search/:keyword' Component={Home} /> */}
             {/* <Route path='/create' Component={Create}  /> */}
             {/* <Route path='/update/:id' Component={Update}  /> */}
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/search/:keyword' element={
              <ProtectedRoute Component={Home}/>
                
            
            } /> 
            <Route path='/create' element={
              <ProtectedRoute Component={Create}/>
                
            
            } /> 
            <Route path='/update/:id' element={
              <ProtectedRoute Component={Update}/>
                
            
            } /> 
            <Route path='/' element={
              <ProtectedRoute Component={Home}/>
                
            
            } /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
