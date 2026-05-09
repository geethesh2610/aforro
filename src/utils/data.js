// ─── Today's Sales ────────────────────────────────────────────────────────────
export const todaysSalesData = [
	{
		id: "total-sales",
		label: "Total Sales",
		value: "$1k",
		change: "+8% from yesterday",
		bgColor: "#FFE2E5",
		iconBg: "#FA5A7D",
		icon: "chart",
	},
	{
		id: "total-order",
		label: "Total Order",
		value: "300",
		change: "+5% from yesterday",
		bgColor: "#FFF4DE",
		iconBg: "#FF947A",
		icon: "order",
	},
	{
		id: "product-sold",
		label: "Product Sold",
		value: "5",
		change: "+1,2% from yesterday",
		bgColor: "#DCFCE7",
		iconBg: "#3CD856",
		icon: "check",
	},
	{
		id: "new-customers",
		label: "New Customers",
		value: "8",
		change: "0,5% from yesterday",
		bgColor: "#F3E8FF",
		iconBg: "#BF83FF",
		icon: "user",
	},
];

// ─── Visitor Insights ─────────────────────────────────────────────────────────
export const visitorInsightsData = [
	{ month: "Jan", loyal: 280, new: 240, unique: 340 },
	{ month: "Feb", loyal: 260, new: 280, unique: 310 },
	{ month: "Mar", loyal: 290, new: 200, unique: 290 },
	{ month: "Apr", loyal: 240, new: 160, unique: 270 },
	{ month: "May", loyal: 220, new: 200, unique: 300 },
	{ month: "Jun", loyal: 250, new: 260, unique: 320 },
	{ month: "Jul", loyal: 300, new: 360, unique: 280 },
	{ month: "Aug", loyal: 320, new: 320, unique: 240 },
	{ month: "Sept", loyal: 280, new: 260, unique: 220 },
	{ month: "Oct", loyal: 240, new: 210, unique: 250 },
	{ month: "Nov", loyal: 210, new: 190, unique: 230 },
	{ month: "Des", loyal: 200, new: 220, unique: 210 },
];

// ─── Total Revenue ────────────────────────────────────────────────────────────
export const totalRevenueData = [
	{ day: "Monday", online: 12000, offline: 10000 },
	{ day: "Tuesday", online: 16000, offline: 8000 },
	{ day: "Wednesday", online: 6000, offline: 21000 },
	{ day: "Thursday", online: 15000, offline: 5000 },
	{ day: "Friday", online: 11000, offline: 7000 },
	{ day: "Saturday", online: 14000, offline: 11000 },
	{ day: "Sunday", online: 20000, offline: 9000 },
];

// ─── Customer Satisfaction ────────────────────────────────────────────────────
export const customerSatisfactionData = [
	{ label: "Week 1", lastMonth: 3200, thisMonth: 4100 },
	{ label: "Week 2", lastMonth: 3800, thisMonth: 3600 },
	{ label: "Week 3", lastMonth: 3400, thisMonth: 4200 },
	{ label: "Week 4", lastMonth: 2900, thisMonth: 3800 },
	{ label: "Week 5", lastMonth: 3100, thisMonth: 4000 },
	{ label: "Week 6", lastMonth: 2800, thisMonth: 3500 },
	{ label: "Week 7", lastMonth: 3000, thisMonth: 4400 },
	{ label: "Week 8", lastMonth: 3200, thisMonth: 4700 },
];

export const customerSatisfactionSummary = {
	lastMonth: { label: "Last Month", value: "$3,004" },
	thisMonth: { label: "This Month", value: "$4,504" },
};

// ─── Target vs Reality ────────────────────────────────────────────────────────
export const targetVsRealityData = [
	{ month: "Jan", reality: 7000, target: 9000 },
	{ month: "Feb", reality: 8000, target: 10000 },
	{ month: "Mar", reality: 9500, target: 11500 },
	{ month: "Apr", reality: 7500, target: 9500 },
	{ month: "May", reality: 8500, target: 12000 },
	{ month: "June", reality: 9000, target: 11000 },
	{ month: "July", reality: 8823, target: 12122 },
];

export const targetVsRealitySummary = {
	reality: { label: "Reality Sales", sublabel: "Global", value: "8,823" },
	target: { label: "Target Sales", sublabel: "Commercial", value: "12,122" },
};
