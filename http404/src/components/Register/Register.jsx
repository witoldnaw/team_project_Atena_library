import { createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import { Form } from "../Form/Form";
import { auth } from "../../Api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";

export const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        signOut(auth);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code])
      })
  }

  return <Form submitText="Zarejestruj się" onSubmit={handleRegister} />;
}