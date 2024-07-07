const useSignup = () => {
  const signup = async ({
    fullname,
    username,
    password,
    email,
    confirmpassword,
    phone,
  }) => {
    try {
      const res = await fetch("http://localhost:3600/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          phone,
          email,
        }),
      });

      if (res.status === 201) {
        console.log(res.user)
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log("error in signup page", error.message);
    }
  };

  return {signup};
};

export default useSignup;
