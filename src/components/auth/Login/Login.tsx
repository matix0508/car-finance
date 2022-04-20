import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { loginUser } from "../../../features/auth/authSlice";
import { auth } from "../../..";
import { GoogleAuthProvider } from "firebase/auth";


export const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.authentication.user)
    const error = useSelector((state: RootState) => state.authentication.error)
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        console.log(user)
        console.log(error)
    }, [user, error])
  if (user) {
    return (<>
    <div>{user.displayName}</div>
    {/* <button onClick={() => dispatch(logout())}>Logout</button> */}
    </>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <button onClick={() => dispatch(loginUser())}>Login</button>;
};
