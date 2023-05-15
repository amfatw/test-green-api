import { useContext, useEffect, useState } from 'react';

import { loadUserNumber } from '../fetch/loadUserNumber';
import { loadUserInfo } from '../fetch/loadUserInfo';
import { logInDataContext } from '../context/context';


const UserInfo = () => {
  const {id, token} = useContext(logInDataContext);
  const [userInfo, setUserInfo] = useState({avatar: '', name: 'unknown'})

  useEffect(() => {
    loadUserNumber(id, token)
    .then((number) => loadUserInfo({id, token, number}))
    .then((userData) => setUserInfo(userData));
  }, [])


  return (
    <div className='user-info'>
      <div className='user-info__photo-container'>
        {userInfo.avatar &&
          <img 
            className='user-info__photo' 
            src={userInfo.avatar} 
            alt="user" 
          />
        }
      </div>
      <p className='user-info__name'>{userInfo.name}</p>
    </div>
  )
}


export { UserInfo };