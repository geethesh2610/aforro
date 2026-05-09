import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
	return (
		<div className="flex min-h-screen bg-gray">
			<Sidebar />

			<main className="flex-1 flex flex-col">
				<Header />
				<div className="p-(--d-32) flex-1">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;