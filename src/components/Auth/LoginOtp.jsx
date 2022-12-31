import React, { useContext, useEffect, useState } from 'react'
import mic_logo from "../../images/mic_logo.png"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext/AuthContext'
import Alert from '../Alert'

const LoginOtp = () => {
    const {redirectOTP, setRedirectOTP, checkOTP, homePage, setHomePage, setRedirectLogin, redirectLogin} = useContext(AuthContext);

    const Navigate = useNavigate();

    const [alert, setAlert] = useState(null);
    const [otp, setOtp] = useState("");
    const showAlert = (type, message, time) =>
    setAlert({
      msg: message,
      type: type
    },
      setTimeout(() => {
        setAlert(null);
      }, time));

    useEffect(()=>{
        if(!localStorage.getItem('otp-token') && redirectLogin.isTrue === false){
            setRedirectLogin({isTrue:true, msg:"Please login first"});
            Navigate("/login");
        }
        else if(redirectOTP.isTrue){
            showAlert("success",redirectOTP.msg,3000);
            setTimeout(() => {
                setRedirectOTP({isTrue:false, msg:""});
              }, 4000);
        }
    },[]);

    const detectChange = (e)=>{
        setOtp(e.target.value);
    }

    const submit = async()=>{

        if(localStorage.getItem('otp-token') === null){
            showAlert("danger", "Inavlid Request", 3000);
            setOtp("");
        }

        else{
            const json = await checkOTP(otp);
            console.log(json);

            if(json.error === 'Error: Token Not Found'){
                showAlert("danger", "Inavlid Request. Please login first", 3000);
                setOtp("");
            }
            else if(json.error === 'TokenExpiredError: jwt expired'){
                showAlert("danger", "OPT Expired", 3000);
                setOtp("");
            }
            else if(json.detail === 'Error: Invalid OTP'){
                showAlert("danger", "Invalid OTP", 3000);
                setOtp("");
            }
            else if(json.success){
                localStorage.removeItem('otp-token');
                localStorage.setItem('token',json.token);
                showAlert("success", "Logged In", 3000);
                setOtp("");
                setHomePage({isTrue:true, msg:"Successfully Logged In"});
                Navigate("/home")
            }
        }
    }

    return (
        <>
            <title>Verify your account</title>
            {alert && <Alert alert={alert} />}
            <section className="bg-gray-50 dark:bg-[#e6dad6] h-auto py-40 md:py-0">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <img className="w-28 h-auto mr-2" src={mic_logo} alt="logo" />
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Verify
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP</label>
                                    <input type="password" name="otp" id="otp" value={otp} onChange={detectChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" maxLength={6} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="items-start">
                                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Resend OTP</Link>
                                    </div>

                                    <div className="items-start">
                                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</Link>
                                    </div>

                                    
                                </div>
                                {otp.length!==6?<button type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 opacity-40">Submit</button>:<button type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submit}>Submit</button>}
                                
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Create One !</Link>
                                </p>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400"> Back to sign in page.
                                     <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sigin.</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginOtp