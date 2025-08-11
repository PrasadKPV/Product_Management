# Product Management Dashboard

A modern, full-featured, and responsive web application for managing a product inventory. Built with the MERN stack, this project showcases a clean user interface, smooth animations, and a robust set of features for a seamless user experience.

[Live Demo](https://your-live-demo-link.com) &nbsp;&nbsp;·&nbsp;&nbsp; [Report Bug](https://github.com/your-repo/issues) &nbsp;&nbsp;·&nbsp;&nbsp; [Request Feature](https://github.com/your-repo/issues)

---

## ✨ Key Features

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

## 🚀 Tech Stack

This project is a monorepo managed with npm workspaces.

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Frontend**  | [React](https://reactjs.org/), [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/) |
| **Backend**   | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [Mongoose](https://mongoosejs.com/) |
| **Database**  | [MongoDB](https://www.mongodb.com/)                                                                    |
| **Styling**   | Pure CSS with Flexbox, Grid, Custom Properties, and Animations                                         |
| **Dev Tools** | [Concurrently](https://www.npmjs.com/package/concurrently), [Nodemon](https://nodemon.io/)              |

## 📸 Screenshots

| Grid View                               | List View                               |
| :-------------------------------------- | :-------------------------------------- |
| *(Placeholder for Grid View Screenshot)* | *(Placeholder for List View Screenshot)* |

| Add/Edit Product Form                     | Mobile Responsive View                    |
| :---------------------------------------- | :---------------------------------------- |
| *(Placeholder for Add/Edit Form Screenshot)* | *(Placeholder for Mobile View Screenshot)* |

## 📁 Project Structure

The project is organized as a monorepo with two main workspaces:

```
/
├── app/
│   ├── backend/      # Express.js backend application
│   └── frontend/     # React frontend application
├── package.json      # Root package.json with monorepo scripts
└── README.md
```

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later) and npm
-   MongoDB (local instance or a connection string from a service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your-username/product-management.git
    cd product-management
    ```

2.  **Install dependencies from the root directory**
    This command will install dependencies for the root, backend, and frontend workspaces.
    ```sh
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the `app/backend/` directory and add your MongoDB connection string and a port for the server.
    ```env
    # app/backend/.env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

### Running the Application

From the root directory, run the development script:

```sh
npm run dev
```

This will start both the backend and frontend servers concurrently.
-   The React frontend will be available at `http://localhost:3000`.
-   The Express backend will be running on `http://localhost:5000` (or the port you specified in `.env`).

The frontend is configured to proxy API requests to the backend, so you're all set to start developing!