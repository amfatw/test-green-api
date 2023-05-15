import { useState } from 'react';

import { LogIn } from './pages/LogIn';
import { Main } from './pages/Main';
import { logInDataContext } from './context/context';


const App = () => {
  const [logInData, setLogInData] = useState(undefined);

  const logIn = (formData) => {
    setLogInData(formData);
  };


  if (!logInData) {
    return <LogIn logIn={logIn}/>
  };

  return (
    <logInDataContext.Provider value={logInData}>
      <Main/>
    </logInDataContext.Provider>
  )
}


export { App };