import { Routes, Route } from 'react-router-dom';


import { AuthContext } from './contexts/AuthContext';

import Header from './components/Header';

import Dashboard from './components/Dashboard/Dashboard';

import Login from './components/Login';

import AddCar from './components/AddCar/AddCar';

import CarList from './components/CarList/CarList';


import useLocalStorage from './hooks/useLocalStorage';


const initialAuthState = {
  user_num: '',
  email: '',
  nm: '',
  sess: '',
};

function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);


  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <div id="container">
        <Header />

        <main id="site-content">
          <Routes>
            
            <Route path="/login" element={<Login  />} />
            <Route path="/dashboard/*" element={<Dashboard  />} />
            <Route path="/car/add" element={<AddCar  />} />
            <Route path="/car/list" element={<CarList  />} />
            
            <Route path="/car/add/:car_num" element={<AddCar />} />
          </Routes>
        </main>

        <footer id="site-footer">
          <p>Car Sharing</p>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;