import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
	LayoutDashboard,
	BarChart3,
	ShoppingCart,
	ShoppingBag,
	ChartNoAxesColumnIncreasing,
	MessageSquare,
	Settings,
	LogOut,
	Users,
	Link as LinkIcon,
} from "lucide-react";

const sidebarLinks = [
	{
		label: "Dashboard",
		path: "/",
		icon: LayoutDashboard,
		isRoute: true,
	},
	{
		label: "Users",
		path: "/users",
		icon: Users,
		isRoute: true,
	},
	{
		label: "Leaderboard",
		path: "#",
		icon: BarChart3,
		isRoute: false,
	},
	{
		label: "Order",
		path: "#",
		icon: ShoppingCart,
		isRoute: false,
	},
	{
		label: "Products",
		path: "#",
		icon: ShoppingBag,
		isRoute: false,
	},
	{
		label: "Sales Report",
		path: "#",
		icon: ChartNoAxesColumnIncreasing,
		isRoute: false,
	},
	{
		label: "Messages",
		path: "#",
		icon: MessageSquare,
		isRoute: false,
	},
	{
		label: "Settings",
		path: "#",
		icon: Settings,
		isRoute: false,
	},
	{
		label: "Sign Out",
		path: "#",
		icon: LogOut,
		isRoute: false,
	},
];

const Sidebar = () => {
	return (
		<aside className='bg-white px-(--d-42) py-(--d-50) w-(--d-345) sticky top-0 z-10 h-screen'>
			<div className='flex flex-col gap-(--d-50)'>
				<Link to='/dashboard' className='flex items-center gap-(--d-24)'>
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" className='size-(--d-56) shrink-0' xmlns="http://www.w3.org/2000/svg">
						<rect width="56" height="56" rx="8" fill="#5D5FEF" />
						<path d="M22.3743 17.6274C21.2422 18.7804 21.2422 20.6463 22.3952 21.7994L24.911 24.3151C27.28 26.6842 27.28 30.5417 24.911 32.9107L20.2988 28.2985C19.1143 27.1139 18.5168 25.5521 18.5168 24.0007C18.5168 22.4493 19.1143 20.8874 20.2988 19.7029L22.3428 17.6588C22.3533 17.6483 22.3638 17.6379 22.3743 17.6274Z" fill="#5D5FEF" stroke="white" stroke-width="2" stroke-miterlimit="10" />
						<path d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176" fill="#5D5FEF" />
						<path d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176" stroke="white" stroke-width="2" stroke-miterlimit="10" />
						<path d="M34.2715 38.2246C35.4036 37.0715 35.4036 35.2056 34.2505 34.0526L31.7348 31.5368C29.3657 29.1678 29.3657 25.3102 31.7348 22.9412L36.347 27.5535C37.5315 28.738 38.129 30.2999 38.129 31.8513C38.129 33.4027 37.5315 34.9645 36.347 36.149L34.3029 38.1931C34.282 38.2141 34.2715 38.2246 34.2715 38.2246Z" fill="#5D5FEF" stroke="white" stroke-width="2" stroke-miterlimit="10" />
						<path d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332" fill="#5D5FEF" />
						<path d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332" stroke="white" stroke-width="2" stroke-miterlimit="10" />
					</svg>
					<span className='font-semibold text30px-desktop text-black'>Dabang</span>
				</Link>

				{/* Menu */ }
				<nav className="flex flex-col gap-(--d-12)">
					{ sidebarLinks.map((item) => {
						const Icon = item.icon;

						if (item.isRoute) {
							return (
								<NavLink
									key={ item.label }
									to={ item.path }
									end={ item.path === "/" }
									className={ ({ isActive }) =>
										`flex items-center gap-(--d-24) rounded-(--d-16) px-(--d-24) py-(--d-16) text18px-desktop transition-all duration-200 ${isActive
											? "bg-primary text-white font-semibold"
											: "text-grayblue hover:bg-[#F6F6FB]"
										}`
									}
								>
									<Icon size={ 22 } strokeWidth={ 2.2 } className='size-(--d-24)' />
									<span>{ item.label }</span>
								</NavLink>
							);
						}

						return (
							<Link
								key={ item.label }
								to={ item.path }
								className="flex items-center gap-(--d-24) rounded-(--d-16) px-(--d-24) py-(--d-16) text18px-desktop text-grayblue transition-all duration-200 hover:bg-[#F6F6FB]"
							>
								<Icon size={ 22 } strokeWidth={ 2.2 } className='size-(--d-24)' />
								<span>{ item.label }</span>
							</Link>
						);
					}) }
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
