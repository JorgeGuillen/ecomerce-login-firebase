import React, { useState } from "react";
import "./styles/contact.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [users, setUser] = useState({
    name: "",
    e_mail: "",
    subject: "",
    message: "",
  });

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };

  const sendData = async (e) => {
    const { name, e_mail, subject, message } = user;
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        name,
        e_mail,
        subject,
        message,
      }),
    };

    const res = await fetch(
      "https://e-commerce-contact-2df6c-default-rtdb.firebaseio.com/message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your message sent");
    } else {
      alert("An error ocurred");
    }
  };

  return (
    <>
      <div className="contact_container">
        <div className="contant">
          <h2># contact us </h2>

          <div className="form">
            <form action="" method="POST">
              <input
                type="text"
                name="Name"
                value={users.name}
                required
                placeholder="Enter your Full Name"
                autoComplete="off"
                onChange={data}
              />
              <input
                type="email"
                name="e_mail"
                value={users.e_mail}
                placeholder="Enter your Email"
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="subject"
                value={users.subject}
                placeholder="Enter your SUbject"
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="message"
                value={users.message}
                placeholder="Enter your message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type="submit" onClick={sendData}>
                  send
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
