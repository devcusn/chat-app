# Chat Application

This is a full-stack chat application with both frontend and backend components housed in the same directory structure.

## Project Structure

```plaintext
.
├── frontend
└── backend
```

- **frontend/**: Contains the frontend code built with React.
- **backend/**: Contains the backend code built with Node.js (express).

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/devcusn/chat-app
   cd chat-app
   ```

2. **Install dependencies for both frontend and backend**:

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install
   ```

### Running the Application

#### Frontend

To start the frontend, navigate to the `frontend` directory and run:

```bash
npm run dev
```

This will start the frontend server, accessible at `http://localhost:5173`.

#### Backend

To start the backend, navigate to the `backend` directory and run:

```bash
npm run start:dev
```

This will start the backend server, usually accessible at `http://localhost:4001`.

### Environment Variables

Make sure to set up environment variables in both the frontend and backend as needed:

- `frontend/.env`:

  ```env
  PORT=5173
  ```

- `backend/.env`:

  ```env
  PORT=4001

  ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
