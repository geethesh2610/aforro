import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Users from "./pages/Users";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />
			},
			{
				path: "users",
				element: <Users />
			}
		]
	},
])

export default router;