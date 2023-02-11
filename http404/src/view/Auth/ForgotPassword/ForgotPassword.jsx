
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../../Api/firebase";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import { FormForgotPassword } from "../Form/FormForgotPassword";

export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, e.target.email.value).catch((e) => {
      console.dir(e);
      alert(firebaseErrors[e.code]);
    });
  };

  return (
    <FormForgotPassword
      submitText="Poproś o przypomnienie hasła"
      onSubmit={handlePasswordReset}
      isPasswordHidden
    />
  );
};