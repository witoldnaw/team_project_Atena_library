
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../../Api/firebase";
import { FormLogin } from "../../Auth/Form/FormLogin";
import { firebaseErrors } from "../../../utils/firebaseErrors";

export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, e.target.email.value).catch((e) => {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    });
  };

  return (
    <FormLogin
      submitText="Poproś o przypomnienie hasła"
      onSubmit={handlePasswordReset}
      isPasswordHidden
    />
  );
};