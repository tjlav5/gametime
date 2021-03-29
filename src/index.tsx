import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCOUBVaUy_-6p04k1LxjbhF3HGo6wZC5FY",
  authDomain: "gametime-3810f.firebaseapp.com",
  projectId: "gametime-3810f",
  storageBucket: "gametime-3810f.appspot.com",
  messagingSenderId: "762436861548",
  appId: "1:762436861548:web:d955046b6a38dd32af6249",
};

ReactDOM.unstable_createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <App />
    </FirebaseAppProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
