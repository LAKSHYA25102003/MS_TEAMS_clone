import React, { useContext, useEffect, useState } from "react";
import NewCard from "../NavbarComponet/NewCard";
import SideBarComponent from "../SideBarComponent/SideBarComponent";
import Universal_Navbar from "../Universal_Navbar";
import SecondNav from "../NavbarComponet/SecondNav";
import GoToTop from "../GoToTop";
import Alert from "../Alert";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RenderingFirst() {

  const [alert, setAlert] = useState(null);
  const { homePage, setHomePage } = useContext(AuthContext);
  const { redirectLogin, setRedirectLogin } = useContext(AuthContext);
  const Navigate = useNavigate();

  const showAlert = (type, message, time) =>
    setAlert(
      {
        msg: message,
        type: type,
      },
      setTimeout(() => {
        setAlert(null);
      }, time)
    );

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setRedirectLogin({ isTrue: true, msg: "Please Logged In First" });
      Navigate("/login");
    } 
    if (homePage.isTrue) {
      showAlert("Success", homePage.msg, 3000);
      setHomePage({ isTrue: false, msg: "" });
    }
  }, []);

  return (
    <div>
      <Universal_Navbar />
      <div>
        <SideBarComponent />
      </div>
      {alert && <Alert alert={alert} />}
      <div className="ml-[90px] sm:ml-[100px] mt-[60px] grid-cols-1 ">
        <div>
          <SecondNav />
        </div>
        <div className=" md:my-[27px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-3">
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
        </div>
      </div>

      <GoToTop />
    </div>
  );
}
