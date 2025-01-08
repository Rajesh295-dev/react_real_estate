# Real Estate Application

![License](https://img.shields.io/badge/license-MIT-green) ![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-blue) ![React](https://img.shields.io/badge/frontend-React-blue) ![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen) ![Leaflet](https://img.shields.io/badge/maps-Leaflet-lightgreen) ![Node.js](https://img.shields.io/badge/backend-Node.js-green) ![Express](https://img.shields.io/badge/framework-Express-yellow) ![Prisma](https://img.shields.io/badge/ORM-Prisma-orange) ![JWT](https://img.shields.io/badge/authentication-JWT-red)

This project is a full-stack real estate application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It features real-time chat functionality using **Socket.IO** and includes user authentication, item saving, and an interactive map for property browsing.

## Features

### 1. List View

- Displays properties in a tile or card format.
- Includes a filter bar for users to narrow down their search.
- Responsive layout optimized for larger screens.

### 2. Map View

- Interactive map powered by **Leaflet**.
- Pins represent property locations, allowing users to explore properties geographically.
- Dynamically updates to reflect filtered results.

### 3. Toggle Functionality

- Users can seamlessly switch between list view and map view using a toggle button.
- Mobile users start in list view with an option to switch to the map view.

### 4. Fully Responsive Design

- Adapts layout based on screen size.
- Ensures proper map rendering on mobile devices by recalculating map dimensions dynamically.

### 5. Live Chat with Socket.IO

- Integrated **Socket.IO** for real-time chat functionality.
- Users can chat with agents or support staff directly within the application.

### 6. Item Saving Feature

- Allows users to save items from the list view.
- Saved items are accessible for future reference, enhancing user experience.

### 7. User Authentication

- User registration and login system with JWT-based authentication.
- Securely manages user sessions with cookies.

---

## Tech Stack

- **React**: Component-based UI.
- **React Router Dom**: Handles routing and navigation.
- **Node.js & Express.js**: Backend API and server.
- **MongoDB**: NoSQL database for data storage.
- **Prisma**: Database ORM for seamless interactions with MongoDB.
- **Socket.IO**: Enables real-time communication for live chat functionality.
- **SCSS**: Modular, responsive styling.
- **JWT & Cookies**: Secure user authentication and session management.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/real-estate-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd real-estate-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory and configure the following:
     ```env
     DATABASE_URL=<your_mongo_connection_string>
     JWT_SECRET=<your_jwt_secret>
     SOCKET_SERVER=<your_socket_server_url>
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the application in your browser at `http://localhost:3000`.

---

## Project Structure

```
real-estate-app/
├── public/
├── src/
│   ├── components/
│   │   ├── filter/
│   │   ├── card/
│   │   ├── map/
│   │   ├── toggle/
│   │   ├── chat/
│   ├── pages/
│   │   ├── ListPage.jsx
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── socket.io/
│   ├── handlers/
│   ├── index.js
│   ├── events.js
├── package.json
```

- **components**: Reusable UI components (Filter, Card, Map, Toggle, Chat).
- **pages**: Application pages, such as `ListPage`.
- **backend**: Server-side logic, including routes, controllers, and models.
- **socket.io**: Logic for handling real-time events and chat communication.
- **styles**: Global and modular SCSS files.

---

## What I Did on the Real Estate Project

### Developed the Front-End Interface:

- Designed and implemented the user interface using React.js.
- Created reusable components like property listings, search filters, and navigation menus.
- Ensured the UI was both visually appealing and intuitive for users.

### Integrated APIs for Data Management:

- Built RESTful APIs using Node.js and Express.js.
- Used Prisma to interact with MongoDB for managing property data.
- Provided endpoints for property listing, saving, and user authentication.

### Responsive Design Implementation:

- Used SCSS for custom styles and responsive design.
- Ensured the application worked seamlessly across desktops, tablets, and smartphones.

### State Management:

- Used React Context API to handle user interactions such as favorite properties, filters, and sorting options.
- Ensured efficient state updates without unnecessary re-renders.

### Interactive Map Integration:

- Integrated Leaflet for map functionality to display property locations.
- Added features for users to visualize nearby amenities and neighborhoods.

### Live Chat with Socket.IO:

- Implemented real-time communication using Socket.IO.
- Built a chat interface where users can interact with agents or support staff.

### Saved Items Feature:

- Enabled users to save their favorite properties for future reference.
- Integrated this feature with MongoDB for persistence.

### User Authentication:

- Built a JWT-based authentication system with secure cookie management.
- Allowed users to register, log in, and maintain sessions.

### Optimized Performance:

- Implemented lazy loading for images and code splitting using React’s Suspense and React.lazy.
- Minimized latency for API calls to improve load times and performance.

### Testing and Deployment:

- Conducted testing using Jest and React Testing Library.
- Deployed the application using platforms like Netlify or Vercel for the front end and Heroku for the backend.

---

## License

This project is licensed under the MIT License.

---

## Conclusion

This real estate application provides an interactive and user-friendly way to browse properties. The combination of list and map views, live chat functionality, item saving, and user authentication enhances user engagement. By addressing common challenges in full-stack development, this project demonstrates best practices in the MERN stack and real-time application design.
