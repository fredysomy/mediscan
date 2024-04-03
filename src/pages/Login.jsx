import { useEffect } from "react";
import { signInWithGooglePopup } from "../firebase";



const Login = () => {
    
 
    return (
    <>
      <div className="flex flex-col sm:flex-row m-10 justify-center justify-between  align-middle h-screen -mt-5">
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5em",
            color: "#ff6347",
          }}
        >
          Login to Access <br /> your Health Data Keys
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              signInWithGooglePopup().then((result) => {
                if(result.user){
                    window.location.href = "/user/profileuser";
                }
              }
              );
            }}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
