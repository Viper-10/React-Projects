import { React, useState } from "react";
import Input from "../Components/Input";

const Login = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  let onChangeName = (event) => {
    setName(event.target.value);
  };

  let onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  let onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  let onSubmit = (event) => {
    // say user is logged in.
    // assume api call is success and redirect to home page.
  };

  return (
    <div id="form">
      <Input labelName="Name" onChangeName={onChangeName} />
      <Input type="email" labelName="EmailId" />
      <Input type="password" labelName="Password" />
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
