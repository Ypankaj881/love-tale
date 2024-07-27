import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AgreePopup from "./components/AgreePopup";
import UserForm from "./components/UserForm";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAgree, setShowAgree] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  const handleAgreeClick = () => {
    setShowLogin(false);
    setShowAgree(true);
  };

  const handleAgree = () => {
    setShowAgree(false);
    setShowForm(true);
  };

  return (
    <>
      <div className="bg-cover min-h-screen flex flex-col">
        <Navbar onLoginClick={handleLoginClick} />
        <Login
          show={showLogin}
          handleClose={handleClose}
          handleAgreeClick={handleAgreeClick}
        />
        <AgreePopup show={showAgree} handleAgree={handleAgree} />
        <div className="container mx-auto pt-16 flex-grow">
          {showForm && <UserForm setShowForm={setShowForm} />}
        </div>
      </div>
    </>
  );
}

export default App;
