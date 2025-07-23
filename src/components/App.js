import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent component</h1>
      {isLoggedIn ? (
        <h2 data-testid="success-msg">✅ You are now logged in!</h2> // ✅ Added test ID
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
