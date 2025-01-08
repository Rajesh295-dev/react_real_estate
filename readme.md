### [ReactEstate](https://reactrealestate.vercel.app/)

![License](https://img.shields.io/badge/license-MIT-green) ![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-blue) ![React](https://img.shields.io/badge/frontend-React-blue) ![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen) ![Leaflet](https://img.shields.io/badge/maps-Leaflet-lightgreen) ![Node.js](https://img.shields.io/badge/backend-Node.js-green) ![Express](https://img.shields.io/badge/framework-Express-yellow) ![Prisma](https://img.shields.io/badge/ORM-Prisma-orange) ![JWT](https://img.shields.io/badge/authentication-JWT-red) ![Vite](https://img.shields.io/badge/bundler-Vite-purple)

[ReactEstate](https://reactrealestate.vercel.app/) is a comprehensive full-stack real estate application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to integrate advanced front-end and back-end development skills into a cohesive, feature-rich platform. By implementing user authentication, JWT, real-time chat, notifications, media upload, item searching, item saving, and an interactive map, the project demonstrates the ability to build scalable, modern web applications while applying best practices and leveraging cutting-edge technologies. The goal of this project was to enhance proficiency in full-stack development by building a feature-rich application that leverages modern technologies and best practices.

---

## Tech Stack

- **[React](https://reactjs.org/)**: Component-based UI.
- **[React Router Dom](https://reactrouter.com/)**: Handles routing and navigation.
- **[Node.js](https://nodejs.org/)** & **[Express.js](https://expressjs.com/)**: Backend API and server.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for data storage.
- **[Prisma](https://www.prisma.io/)**: Database ORM for seamless interactions with MongoDB.
- **[Socket.IO](https://socket.io/)**: Enables real-time communication for live chat functionality.
- **[SCSS](https://sass-lang.com/)**: Modular, responsive styling.
- **[JWT](https://jwt.io/)** & **Cookies**: Secure user authentication and session management.
- **[Cloudinary](https://cloudinary.com/)**: Media management and optimization.

---

## Features

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
- **pages**: Application pages, such as `ListPage`, `ProfilePage`, `Login`, `Register`, `ProfileUpdatepage`.
- **backend**: Server-side logic, including routes, controllers, middelware, models and library for Prisma-ORM.
- **socket.io**: Logic for handling real-time events and chat communication.
- **styles**: Global and modular SCSS files.

---

## What I Did on the Real Estate Project

### User Authentication:

- Built a JWT-based authentication system with secure cookie management.
- Allowed users to register, log in, and maintain sessions.

### Middleware Functionality:

- Developed custom middleware in Express.js to handle authentication and request validation.
- Streamlined request logging and error handling using middleware.
- Ensured secure access to protected routes by integrating middleware with JWT-based authentication.

### Integrated APIs for Data Management:

- Built RESTful APIs using Node.js and Express.js.
- Used Prisma to interact with MongoDB for managing property data.
- Provided endpoints for property listing, saving, and user authentication.

### Prisma ORM Integration:

- Leveraged **Prisma ORM** for efficient and seamless interactions with the MongoDB database.
- Simplified database schema management and migrations using Prisma's schema definition.
- Enhanced query performance and maintainability with Prisma's intuitive query builder.

### Media Management with Cloudinary:

- Integrated **Cloudinary** for efficient media storage and optimization.
- Managed property images and ensured they were optimized for fast loading across devices.
- Implemented responsive image handling to improve performance and user experience.

### Developed the Front-End Interface:

- Designed and implemented the user interface using React.js.
- Created reusable components like property listings, search filters, and navigation menus.
- Ensured the UI was both visually appealing and intuitive for users.

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

### Optimized Performance:

- Implemented lazy loading for images and code splitting using React’s Suspense and React.lazy.
- Minimized latency for API calls to improve load times and performance.

### Testing and Deployment:

- Conducted testing using Jest and React Testing Library.
- Deployed the application using platforms like Netlify or Vercel for the front end and Heroku for the backend.

---

## License

![License](https://img.shields.io/badge/license-MIT-green)

---

## Conclusion

This real estate application provides an interactive and user-friendly way to browse properties. The combination of list and map views, live chat functionality, item saving, and user authentication enhances user engagement. By addressing common challenges in full-stack development, this project demonstrates best practices in the MERN stack and real-time application design.
