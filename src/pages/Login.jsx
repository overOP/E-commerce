import InputField from "../components/input"

const Login = () => {
  return (
    <>
      <div className="bg-blue-300 h-screen flex flex-col items-center justify-center">
        <h2>Welcome back !!</h2>
        <div>
          <form>
            <h1>Login</h1>
            <div>
              <InputField
                ttitle={"Email"}
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
          </form>
          
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default Login
