

const useLogin = () => {
  const login=async({username,password})=>{
    try {
        const res = await fetch("http://localhost:3600/api/auth/login", {
          method: "POST",
          credentials: 'include',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
  
        if (res.status === 200) {
          const data = await res.json();
          console.log("Login success", data);
          // Handle successful login (e.g., redirect or update state)
        } else {
          console.log("Login failed");
          // Handle failed login (e.g., display error message)
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        // Handle network or other errors
      }
  }
  return {login}
}

export default useLogin
