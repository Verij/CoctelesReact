//configuracion para el firebase

export const firebaseConfig = {
  apiKey: "AIzaSyDItGJsY867NxXYAdv-9fb8r4OmOsCDGwc",
  authDomain: "cocteles-react-proyecto.firebaseapp.com",
  projectId: "cocteles-react-proyecto",
  storageBucket: "cocteles-react-proyecto.appspot.com",
  messagingSenderId: "702644412271",
  appId: "1:702644412271:web:7576cc8e84add1f74a529a"
};


export const actionCodeSettingsVerification = {
  url:
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000'
  : '',
};