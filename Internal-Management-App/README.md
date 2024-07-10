# Internal Management App

Welcome to the Internal Management App, a sophisticated and intuitive solution designed to streamline hotel operations and enhance efficiency for hotel staff. Built with the latest technologies and best practices, this application empowers employees to manage daily tasks, reservations, and cabin listings effortlessly.

- Deployed URL- [Live on vercel](https://internal-management-webapp.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

### Dashboard

- **Comprehensive Summary**: Gain insights into today’s activities, past 30 days, and 90 days through interactive charts (pie chart, area chart) using the Recharts library.
- **Check-In/Check-Out Management**: Efficiently handle guest check-ins and check-outs for the day.

### Bookings Section

- **Reservation Overview**: View all bookings with advanced pagination and filtering options based on check-in/checked-out status, unconfirmed bookings, and sorting by amount/date.
- **Detailed Booking View**: Access comprehensive details of each booking with options to check-in, check-out, and delete bookings.

### Cabins Section

- **Cabin Management**: View all listed cabins, add new cabins, and edit or delete existing cabins seamlessly.

### Users Section

- **Staff Management**: Edit existing staff profiles and add new staff members to ensure accurate and up-to-date employee information.

### Additional Features

- **Dark Mode**: Toggle between light and dark modes for a comfortable user experience.
- **Authentication**: Secure login and access control powered by Supabase, ensuring that only authorized personnel can access the app.

## Technology Stack

The Internal Management App leverages modern technologies to deliver a robust and responsive user experience:

- **Frontend**: ReactJS
- **Backend & Database**: Supabase
- **State Management**: React Query
- **Routing**: React Router
- **Styling**: styled-components
- **Charts**: Recharts

## Installation

Follow these steps to set up the Internal Management App locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/parasd086/Resort-Management-Webapp.git
   cd Resort-Management-Webapp
   cd Internal-Management-App
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables for Supabase-
     - VITE_SUPABASE_KEY

4. **Run the development server**:

   ```bash
   npm start
   ```

5. **Open the app in your browser**:
   - Visit `http://localhost:5173` to access the Internal Management App.

## Usage

The Internal Management App is designed to be user-friendly and intuitive. Here’s a quick guide to get you started:

- **Dashboard**: Use the dashboard for a quick overview of hotel operations, including guest check-ins/check-outs and reservation summaries.
- **Bookings Section**: Manage reservations with ease using advanced filtering and sorting options. View detailed booking information and handle guest check-ins/check-outs.
- **Cabins Section**: Add, edit, or delete cabin listings to keep the accommodation offerings up-to-date.
- **Users Section**: Maintain staff information by adding new employees or updating existing profiles.

## Contributing

We welcome contributions to enhance the functionality and features of the Internal Management App. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Push your changes to the branch.
5. Open a pull request to the main branch.

## Acknowledgments

Thanks to [Jonas Schmedtmann React JS Course!](https://www.udemy.com/course/the-ultimate-react-course/)
