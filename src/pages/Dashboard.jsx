import React from 'react'
import TodaysSales from '../components/dashboard/TodaysSales'
import VisitorInsights from '../components/dashboard/VisitorInsights'
import TotalRevenue from '../components/dashboard/TotalRevenue'
import CustomerSatisfaction from '../components/dashboard/CustomerSatisfaction'
import TargetVsReality from '../components/dashboard/TargetVsReality'

const Dashboard = () => {
	return (
		<div className='flex flex-col gap-(--d-30)'>
			<div className='grid grid-cols-[1.48fr_1fr] gap-(--d-30)'>
				<TodaysSales />
				<VisitorInsights />
			</div>
			<div className='grid grid-cols-[1.74fr_1.13fr_1fr] gap-(--d-30)'>
				<TotalRevenue />
				<CustomerSatisfaction />
				<TargetVsReality />
			</div>
		</div>
	)
}

export default Dashboard
