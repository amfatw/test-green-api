import { useContext, useState } from 'react';

import { checkWA } from '../fetch/checkWA';
import { logInDataContext } from '../context/context';


const AddContact = ({addContact}) => {
  const {id, token} = useContext(logInDataContext);

  const [inputNumber, setInputNumber] = useState('');

  const handleAddButtonClick = async () => {
    const isWA = await checkWA(inputNumber, id, token);
    
    if (!isWA) {
      alert('WhatsApp was not found on the entered number');

      return;
    };

    addContact(inputNumber);

    setInputNumber('');
  }

  const handleEnter = (event) => {
    if (event.key !== 'Enter') return;

    handleAddButtonClick();
  }


  return (
    <div className='add-contact'>
      <input 
        className='add-contact__number-input'
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button 
        className='add-contact__add-button'
        onClick={() => handleAddButtonClick(inputNumber)}
      >
        <span className='visually-hidden'>add</span>
      </button>
    </div>
  )
}


export { AddContact };