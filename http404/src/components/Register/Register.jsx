import { createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import { Form } from "../Form/Form";
import { auth, db } from "../../Api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getAllByPlaceholderText } from "@testing-library/react";

export const Register = () => {
  // const handleRegister = (e) => {
    
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((jwt) => {
  //       e.target.reset();
  //       console.log(jwt);
  //       signOut(auth); 

  //         addDoc(collection(db, "users"),{status: "user"}).then((
  //           aaasdadf
  //         )=> console.log(aaasdadf))
  //     })
  //     .catch((e) => {
  //       console.dir(e);
  //       alert(firebaseErrors[e.code])
  //     })
      
  // }

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
    const { email, password } = getFormData(e);
      const jwt = await createUserWithEmailAndPassword(auth, email, password);
  
      const userData = {status: "user", email: email}
      const userRef = doc(db, "users", jwt.user.uid);
      await setDoc(userRef, {
        ...userData,
        id: jwt.user.uid,
      });
    } catch (error) {
      return firebaseErrors[error.code];
    }
  };




  return (
  <Form submitText="Zarejestruj się" onSubmit={handleRegister} />
  )
}