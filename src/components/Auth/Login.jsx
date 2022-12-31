import React, { useContext, useEffect, useState } from 'react'
import mic_logo from "../../images/mic_logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../Alert'
import AuthContext from '../../Context/AuthContext/AuthContext'
import Home from './Home'
import RenderingFirst from '../RenderingPages/RenderingFirst'
const Login = () => {
  const { redirectLogin, setRedirectLogin, sendingdOTP, redirectOTP, setRedirectOTP, setHomePage } = useContext(AuthContext);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({ email: "", password: "" });
  const Navigate = useNavigate();

  const detectChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const showAlert = (type, message, time) =>
    setAlert({
      msg: message,
      type: type
    },
      setTimeout(() => {
        setAlert(null);
      }, time));

  useEffect(() => {
    if (localStorage.getItem('token')) {
      Navigate("/home");
    }
    if (redirectLogin.isTrue) {
      if (redirectLogin.msg === "Please login first") {
        showAlert("danger", redirectLogin.msg, 3000);
      }
      else {
        showAlert("success", redirectLogin.msg, 3000);
        setTimeout(() => {
          setRedirectLogin({ isTrue: false, msg: "" });
        }, 4000)
      }
    }
  }, [])

  const submit = async () => {
    const json = await sendingdOTP(user.email, user.password);
    console.log(json);
    if (json.detail === 'Error: Incorrect Password') {
      showAlert("danger", "Incorrect Password", 5000);
      setUser({ email: user.email, password: "" });
    }
    else if (json.success) {
      localStorage.setItem("otp-token", json.token);
      setRedirectOTP({ isTrue: true, msg: "OTP send to your mail id. Please check the inbox" });
      Navigate("/verify-account");
      // showAlert("success","User Found", 3000);
      setUser({ email: "", password: "" });
    }
  }

  if (localStorage.getItem('token')) {
    setHomePage({ isTrue: true, msg: "Already logged in" });
    return <RenderingFirst />
  }

  return (
    <>

      <title>Sign in to your account</title>
      {alert && <Alert alert={alert} />}
      <section className="bg-gray-50 dark:bg-[#e6dad6] h-auto py-40 md:py-0">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <img className="w-28 h-auto mr-2" src={mic_logo} alt="logo" />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>

              <form className="space-y-4 md:space-y-6" action>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" value={user.email} id="email" onChange={detectChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" value={user.password} onChange={detectChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">

                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</Link>
                </div>
                {user.email === "" || user.password === "" ? <div type="submit" className="opacity-40 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</div> : <button type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submit}>Sign in</button>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Create One !</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login