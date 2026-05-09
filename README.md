# Aforro React Assignment

This project is a React application built as part of the Aforro assignment.

The application includes two main pages:

1. Dashboard
2. Users

The Dashboard page is implemented based on the provided Figma design. The Users page is implemented based on the API integration and data table requirements mentioned in the assignment.

## Setup Steps

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/geethesh2610/aforro.git
```

### 2. Go to the project folder

```bash
cd <project-folder-name>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application in the browser

```bash
http://localhost:5173
```

If port `5173` is already in use, Vite may run the project on another port. Please check the terminal for the correct local URL.

## Implementation Approach

The project was divided into two main sections: Dashboard and Users.

### Dashboard Page

The Dashboard page was created by following the provided Figma design. I created separate reusable sections and components for the dashboard cards and charts.

For the chart visualizations, I used Recharts. Since no API was provided for the dashboard data, I created a separate utility data file and added the required dummy data for the charts and dashboard sections there. This keeps the component files cleaner and makes the data easier to manage.

The dashboard includes the following sections:

- Today's Sales
- Visitor Insights
- Total Revenue
- Customer Satisfaction
- Target vs Reality

Tailwind CSS was used for styling the dashboard and matching the Figma design as closely as possible.

### Users Page

The Users page was built for the API integration and data table requirement.

The data is fetched from the public API:

```bash
https://jsonplaceholder.typicode.com/users
```

After fetching the data, I formatted it to show only the required fields in the table:

- Name
- Email
- Company Name
- City

The Users page includes the following functionalities:

- Fetch users using the Fetch API
- Display users in a table format
- Search users by name or email
- Sort users by name in A-Z order
- Sort users by name in Z-A order
- Filter users by city
- Handle loading state while fetching data
- Handle error state if the API request fails
- Show an empty state when no matching users are found

I used TanStack Table for the table implementation because it provides a clean and structured way to manage table rows, columns, and sorting.

## Assumptions and Decisions

- The Dashboard page uses dummy/static data because no dashboard API was provided.
- Dashboard dummy data is stored in a utility file to keep the components clean.
- Recharts was used for chart components because it works well with React dashboards.
- TanStack Table was used for the Users table to keep the table logic structured.
- Fetch API was used for API integration.
- Tailwind CSS was used for styling the application.
- The project focuses only on the required assignment features.

## Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- Recharts
- TanStack Table
- React Router
- Fetch API
