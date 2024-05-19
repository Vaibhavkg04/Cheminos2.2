import React from "react";
import { Routes, Route } from "react-router-dom";
import Front from "./Components/FrontPage/front";
import Headers from "./Components/Headers";
import Login from "./Components/Login";
import Dashboard from "./Components/DashBoard";
import Nav from "./Components/FrontPage/navbar/nav";

import "./App.css";

function App() {
	return (
		<>
		   <Nav/>
			<Routes>
				<Route path="/" element={<Front />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
