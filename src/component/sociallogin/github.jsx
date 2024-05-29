import React from "react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { FaGithub } from "react-icons/fa";

const Github = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  if(error){
    toast.error(error?.message)
}
if (loading) {
  return <Lodar></Lodar>
}
if (user) {
  return (
    <div>
      {toast.success(user.email)}
    </div>
  );
}
  return (
    <div>
      <button
        onClick={() => signInWithGithub()}
        className="social-button apple "
      >
       <FaGithub />
      </button>
    </div>
  );
};

export default Github;
