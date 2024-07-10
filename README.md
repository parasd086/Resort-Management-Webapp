# Resort Management Webapp

Welcome to the Resort Management Webapp, a comprehensive and elegant solution for both internal Resort management and customer-facing reservation systems. This project is divided into two main applications to cater to the distinct needs of Resort employees and guests, ensuring a seamless and efficient experience for all users.

Deployed URL-

- Internal Management App- [Live on vercel](https://internal-management-webapp.vercel.app/)
- Customer Facing App- [Live on vercel](https://customer-facing-webapp.vercel.app/)

## Internal Management App

### Overview

The Internal Management App is designed for Resort staff to manage daily operations effortlessly. Built with ReactJS, Supabase, React Query, React Router, and styled-components, this application provides a robust and user-friendly interface for employees to handle various management tasks.

### Features

- **Dashboard**:

  - **Summary View**: Get a quick overview of today's activities, past 30 days, and 90 days with detailed charts (pie chart, area chart) using the Recharts library.
  - **Check-In/Check-Out**: Manage guest check-ins and check-outs efficiently straight from your dashboard.

- **Bookings Section**:

  - **Reservation Management**: View all reservations with pagination and filtering options based on check-in/checked-out status, unconfirmed bookings, and sorting by amount/date.
  - **Detailed Booking View**: Access comprehensive details of each booking, with options to check-in/check-out and delete bookings.

- **Cabins Section**:

  - **Cabin Management**: View, add, edit, and delete cabin listings seamlessly.

- **Users Section**:

  - **Staff Management**: Add new staff members and edit existing profiles to keep employee information up-to-date.

- **Additional Features**:
  - **Dark Mode**: Toggle between light and dark modes for a comfortable user experience.
  - **Authentication**: Secure login and access control powered by Supabase.

## Customer Facing Webapp

### Overview

The Customer Facing Webapp is a sleek and intuitive platform for guests to explore, book, and manage their Resort reservations. Utilizing NextJS, Supabase, Tailwind CSS, and Next-auth, this application ensures a smooth and enjoyable experience for users.

### Features

- **All Cabins Section**:

  - **Cabin Listings**: Browse through all available cabins with comprehensive filtering options to find the perfect fit.

- **Cabin Detail Pages**:

  - **Cabin Information**: View detailed information about each cabin, including amenities, photos, and descriptions.
  - **Date Picker**: Check availability with an intuitive date picker, highlighting available and non-available dates.
  - **Booking System**: Book a cabin directly from the detail page with a streamlined reservation process.

- **Account Profile Page**:
  - **User Profile Management**: View and edit personal information to keep profiles updated.
  - **Reservation Management**: View, edit, and manage upcoming reservations. Access past reservations for reference and record-keeping.

## Technology Stack

### Internal Management App:

- **Frontend**: ReactJS
- **Backend & Database**: Supabase
- **State Management**: React Query
- **Routing**: React Router
- **Styling**: styled-components
- **Charts**: Recharts

### Customer Facing Webapp:

- **Framework**: NextJS
- **Backend & Database**: Supabase
- **Styling**: Tailwind CSS
- **Authentication**: Next-auth

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/parasd086/Resort-Management-Webapp.git
   cd Resort-Management-Webapp
   CD into individual directories
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   - For the Internal Management App:
     ```bash
     npm run dev
     ```
   - For the Customer Facing Webapp:
     ```bash
     npm run dev
     ```

4. **Open the app in your browser**:
   - Internal Management App: `http://localhost:5173`
   - Customer Facing Webapp: `http://localhost:3000`

## Contributing

We welcome contributions to enhance the functionality and features of the Resort Management Webapp. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Push your changes to the branch.
5. Open a pull request to the main branch.

## Acknowledgments

Thanks to [Jonas Schmedtmann React JS Course!](https://www.udemy.com/course/the-ultimate-react-course/)

---
