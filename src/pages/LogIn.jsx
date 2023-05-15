import { useState } from 'react';

import { checkAccount } from '../fetch/checkAccount';


const LogIn = ({logIn}) => {
  const [formData, setFormData] = useState({id: '', token: ''});
  const [isChecking, setIsChecking] = useState(false);

  const handleInputChange = (event) => {
    const newData = event.target.value;
    const field = event.target.id;

    setFormData({...formData, [field]: newData});
  }

  const isButtonDisabled = (
    !formData.id.trim() 
    || !formData.token.trim()
    || isChecking
  );

  const handleButtonClick = async() => {
    setIsChecking(true);

    const {id, token} = formData;
    const isDataCorrect = await checkAccount({id, token});

    setIsChecking(false);

    if (!isDataCorrect) {
      alert('Incorrect id or token');

      return;
    }

    logIn(formData)
  }


  return (
    <form className='login-form'>
      <label 
        className='login-form__label'
        htmlFor="#id"
      >
        idInstance:
      </label>
      <input 
        className='login-form__input'
        id='id'
        type="number"
        value={formData.id}
        disabled={isChecking}
        onChange={handleInputChange}
      />

      <label 
        className='login-form__label'
        htmlFor="#token"
      >
        apiTokenInstance:
      </label>
      <input
        className='login-form__input'
        id='token'
        type="password"
        value={formData.token}
        disabled={isChecking}
        onChange={handleInputChange}
      />
      <button
        className='login-form__button'
        type='button'
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
      >
        {isChecking
          ? <span>Checking...</span> 
          : <span>OK</span>
        }
      </button>
    </form>
  )
}


export { LogIn };