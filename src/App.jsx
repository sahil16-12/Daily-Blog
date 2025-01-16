// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import "./App.css";
// import authService from "./appwrite/auth";
// import { login, logout } from "./store/authSlice";
// import { Footer, Header } from "./components";
// import { Outlet } from "react-router-dom";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Check for the current user on app load
//     authService
//       .getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setLoading(false));
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-orange-500">
//         <p className="text-2xl font-bold text-white">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-orange-50">
//       {/* Header */}
//       <Header />

//       {/* Main content */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-2xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
