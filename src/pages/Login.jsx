import InputField from "../components/input"

const Login = () => {
  return (
    <>
      <div className="bg-blue-300 h-screen flex flex-col items-center justify-center">
        <div className="bg-gray-100 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-10">Logo Here</h2>
          <form>
            <p className="text-sm">Welcome back!!</p>
            <h1 className="font-extrabold text-3xl">LogIn</h1>
            <div>
              <InputField
                title={"Email"}
                type="text"
                id="email"
              />
            </div>

            <div>
              <InputField
                title={"Password"}
                type="password"
                id="password"
              />
            </div>
            <div className="items-center mt-4">
              <button className=" border border-red-500 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
                SignIn
              </button>
            </div>
          </form> 
        </div>

        <div>

        </div>
      </div>
    </>
  )
}

export default Login
