import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const useRedirect = redireccionar => {
  const { currentUser } = useSelector(state =>state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser){
      navigate(redireccionar);
    }
  }, [currentUser, navigate, redireccionar]);
  };
  


export default useRedirect;