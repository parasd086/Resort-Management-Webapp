# Customer Facing Webapp

Welcome to the Customer Facing Webapp, a sleek and intuitive platform designed to provide guests with a seamless and enjoyable experience when exploring, booking, and managing their hotel reservations. Built with cutting-edge technologies, this application ensures a smooth and responsive user experience, catering to the diverse needs of hotel guests.

- Deployed URL- [Live on vercel](https://customer-facing-webapp.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

### All Cabins Section

- **Cabin Listings**: Browse through a comprehensive list of available cabins, each with detailed descriptions and images.
- **Advanced Filtering**: Use intuitive filters to narrow down cabin choices based on user preferences and requirements.

### Cabin Detail Pages

- **In-Depth Information**: Access detailed information about each cabin, including amenities, photos, and descriptions.
- **Date Picker**: Check availability with an easy-to-use date picker, highlighting available and non-available dates.
- **Seamless Booking**: Book a cabin directly from the detail page with a streamlined reservation process.

### Account Profile Page

- **User Profile Management**: View and edit personal information to keep profiles up-to-date.
- **Reservation Management**: View and manage upcoming reservations, including editing and updating booking details.
- **Past Reservations**: Access a history of past reservations for reference and record-keeping.

## Technology Stack

The Customer Facing Webapp is built using modern technologies to ensure performance, scalability, and a delightful user experience:

- **Framework**: NextJS
- **Backend & Database**: Supabase
- **Styling**: Tailwind CSS
- **Authentication**: Next-auth

## Installation

Follow these steps to set up the Customer Facing Webapp locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/parasd086/Resort-Management-Webapp.git
   cd customer-facing-webapp
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env.local` file in the root directory.
   - Add the necessary environment variables for-
     - SUPABASE_URL
     - SUPABASE_KEY
     - NEXTAUTH_URL
     - NEXTAUTH_SECRET
     - AUTH_GOOGLE_ID
     - AUTH_GOOGLE_SECRET

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:
   - Visit `http://localhost:3000` to access the Customer Facing Webapp.

## Usage

The Customer Facing Webapp is designed to provide an intuitive and seamless user experience. Here’s a quick guide to get you started:

- **All Cabins Section**: Browse through the list of available cabins, using filters to find the perfect fit for your stay.
- **Cabin Detail Pages**: View detailed information about each cabin, check availability, and book directly from the cabin page.
- **Account Profile Page**: Manage your profile information, view upcoming reservations, and access past booking history.

## Contributing

We welcome contributions to enhance the functionality and features of the Customer Facing Webapp. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Push your changes to the branch.
5. Open a pull request to the main branch.

## Acknowledgments

Thanks to [Jonas Schmedtmann React JS Course!](https://www.udemy.com/course/the-ultimate-react-course/)

---
