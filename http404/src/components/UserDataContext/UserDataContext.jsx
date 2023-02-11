import { createContext } from "react";
import { useState, useEffect } from "react";
import { db, auth } from "../../Api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export const userDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState(false);
  const [role, setRole] = useState("user");
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        onSnapshot(userRef, (userSnapshot) => {
          const data = userSnapshot.data();

          if (!data) {
            return;
          }

          setUser(user);
          setUserData({ id: userSnapshot.id, ...data });
          data.isAdmin ? setRole("admin") : setRole("user");
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <userDataContext.Provider value={{ role, user, setUser, userData }}>
      {props.children}
    </userDataContext.Provider>
  );
};
