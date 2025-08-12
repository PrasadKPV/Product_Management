# Product Management Dashboard

A modern, full-featured, and responsive web application for managing a product inventory. Built with the MERN stack, this project showcases a clean user interface, smooth animations, and a robust set of features for a seamless user experience.

[Live Demo](https://your-live-demo-link.com) &nbsp;&nbsp;·&nbsp;&nbsp;

---

## Key Features

-   **CRUD Operations**: Full capabilities to Create, Read, Update, and Delete products.
-   **Dynamic Product Display**:
    -   Switch between a beautiful **Grid View** and a detailed **List View**.
    -   Smooth, animated transitions when toggling views and loading items.
-   **Powerful Filtering and Sorting**:
    -   Live search to instantly filter products by name.
    -   Sort products by price (Low to High / High to Low) with a custom-styled dropdown.
-   **Modern UI/UX**:
    -   Clean, responsive design that works on desktop, tablets, and mobile devices.
    -   Interactive, animated navigation and controls.
    -   A professional and engaging split-screen layout for adding and editing products.
-   **User-Friendly Forms**:
    -   Intuitive forms for adding and editing products.
    -   Client-side validation to prevent errors.
-   **Safe Deletion**: A confirmation modal prevents accidental product deletion.

## Tech Stack

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Framework** | [Next.js](https://nextjs.org/) (React Framework)                                                       |
| **Backend**   | Next.js API Routes, [Mongoose](https://mongoosejs.com/)                                                |
| **Database**  | [MongoDB](https://www.mongodb.com/)                                                                    |
| **Styling**   | Pure CSS with Flexbox, Grid, Custom Properties, and Animations                                         |
| **Deployment**| [Vercel](https://vercel.com/)                                                                          |

## Screenshots

| Grid View                               | List View                               |
| :-------------------------------------: | :-------------------------------------: |
| ![Grid View](./screenshots/grid-view.png) | ![List View](./screenshots/list-view.png) |

| Add/Edit Product Form                     | Mobile Responsive View                    |
| :---------------------------------------: | :---------------------------------------: |
| ![Add/Edit Form](./screenshots/form-view.png) | ![Mobile View](./screenshots/mobile-view.png) |


## Project Structure

The project is a standard Next.js application.

```
/
├── app/
│   ├── backend/      # Express.js backend application
│   └── frontend/     # React frontend application
├── package.json      # Root package.json with monorepo scripts
└── README.md
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later) and npm
-   MongoDB (local instance or a connection string from a service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/PrasadKPV/Product_Management.git
    cd product-management
    ```

2.  **Install dependencies from the root directory**
    ```sh
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env.local` file in the root of your project and add your MongoDB connection string.
    ```env
    # .env.local
    MONGO_URI=your_mongodb_connection_string
    ```

### Running the Application

```sh
npm run dev
```

This will start both the backend and frontend servers concurrently.
-   The React frontend will be available at `http://localhost:3000`.
-   The Express backend will be running on `http://localhost:5000` (or the port you specified in `.env`).

The frontend is configured to proxy API requests to the backend, so you're all set to start developing!