
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDB-hKIImtPfTMiMOO6FdZJXHe-CcM6io",
  authDomain: "netflix-gpt-b68b5.firebaseapp.com",
  projectId: "netflix-gpt-b68b5",
  storageBucket: "netflix-gpt-b68b5.appspot.com",
  messagingSenderId: "379896917308",
  appId: "1:379896917308:web:f0a99a1f23fc51ab388239",
  measurementId: "G-SDY6N2PBKQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const auth = getAuth(app); 
export default app;