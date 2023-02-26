import { Layout } from './components/layout/Layout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes } from './components/routes/Routes';
import { onAuthStateChanged } from 'firebase/auth'
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as userActions from './redux/user/user-actions'

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}

function App() {


  const dispatch = useDispatch();
    useEffect(() => {
    onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => onAuthStateChange(dispatch, userActions.setCurrentUser);
  }, [dispatch]);


  return (
<>
<Layout>
  <Header />
  <Routes />
  <Footer />
</Layout>
</>
  );
}

export default App;
