import { usecontext } from "../context/UserContext.jsx";



const useReset = () => {
    const {getuser}=usecontext()

  const reset = async () => {
    getuser()

    try {
        const res = await fetch("http://localhost:3600/api/reset/pass", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              oldpassword,
              newpassword,
              confirmnewpassword,
            }),
            
          });
          const data =await res.json();
          if(res.status===200){
            console.log("password reset succesfull",data)

          }else{
            console.log("password not reset")
          }



    } catch (error) {
        console.log("error in usereset ")
    }

  };

  return { reset };
};

export default useReset;
