import axios from "axios";
import React from "react";



function LoginForm() {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
