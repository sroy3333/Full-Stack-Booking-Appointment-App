# 📅 Full-Stack Booking Appointment App

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-lightgrey?style=for-the-badge)

---

## 📖 Project Description

**Full-Stack Booking Appointment App** is a complete, server-rendered web application that enables users to seamlessly schedule and manage appointments. Built on a clean **MVC (Model-View-Controller)** architecture using **Node.js**, **Express.js**, and **MySQL** via **Sequelize ORM**, the app covers the full appointment lifecycle — from user registration to booking creation, viewing, and management.

The frontend is rendered directly from the server through the `views/` layer using HTML, CSS, and vanilla JavaScript, while the backend handles all business logic, data persistence, and routing. The project demonstrates production-aligned patterns: layered Express routing, Sequelize model associations, a dedicated utility layer for database setup, CORS support for API flexibility, and clean separation of concerns across every folder. It is a practical, deployable full-stack application ideal for clinics, salons, coaching services, or any appointment-driven business.

---

## ✨ Features

- 📝 **Appointment Booking** — Create new appointments with user details, preferred date, and time slot
- 👤 **User Registration** — Register and manage user profiles stored persistently in MySQL
- 📋 **Appointment Listing** — View all booked appointments in a clean, structured interface
- ✏️ **Edit & Update** — Modify existing appointment details after booking
- 🗑️ **Delete Appointment** — Cancel and remove appointments from the system
- 🗄️ **Relational Database** — MySQL with Sequelize ORM for robust schema management and querying
- 🌐 **Server-Rendered Views** — Full HTML views served directly from the Node.js backend
- 🔁 **RESTful Routing** — Clean, organised Express routes for all CRUD operations
- 🛡️ **CORS Enabled** — Cross-Origin Resource Sharing configured for API compatibility
- ⚡ **Hot Reload** — Nodemon-powered development server for rapid iteration

---

## 🛠️ Tech Stack

### Programming Language

| Language | Usage |
|---|---|
| JavaScript (Node.js) | Backend server, routing, and business logic |
| HTML5 | Server-rendered page templates in `views/` |
| CSS3 | Styling and responsive layout in `public/css/` |

### Libraries / Frameworks

| Library / Framework | Version | Purpose |
|---|---|---|
| Express.js | ^4.18.2 | HTTP server, routing, and middleware pipeline |
| Sequelize ORM | ^6.32.1 | MySQL database access, model definitions, associations |
| MySQL2 | ^3.6.0 | MySQL database driver for Node.js |
| body-parser | ^1.20.2 | Parses incoming JSON and URL-encoded request bodies |
| cors | latest | Cross-Origin Resource Sharing middleware |
| nodemon | ^3.0.1 | Development server with automatic restart |

---

## 📁 Project Structure

```
Full-Stack-Booking-Appointment-App/
│
├── app.js                        # Express entry point — middleware, routes, DB sync, server
│
├── controllers/                  # Request handlers (HTTP layer)
│   ├── appointmentController.js  # CRUD logic for appointments (create, read, update, delete)
│   └── userController.js         # User registration and profile handlers
│
├── models/                       # Sequelize model definitions
│   ├── user.js                   # User schema (id, name, email, phone)
│   ├── appointment.js            # Appointment schema (date, time, service, status, UserId)
│   └── index.js                  # Sequelize initialisation, sync, and model associations
│
├── routes/                       # Express route definitions
│   ├── appointmentRoutes.js      # /appointments CRUD endpoints
│   └── userRoutes.js             # /users registration and lookup endpoints
│
├── views/                        # Server-rendered HTML pages
│   ├── index.html                # Landing / home page
│   ├── booking.html              # New appointment booking form
│   ├── appointments.html         # All appointments list view
│   └── edit.html                 # Edit appointment form
│
├── public/
│   └── css/                      # Global stylesheets
│       └── style.css
│
├── util/                         # Utility / helper layer
│   └── database.js               # Sequelize instance creation and DB connection config
│
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Locked dependency tree
├── .gitignore                    # Files excluded from version control
└── .env.example                  # Environment variable template
```

---

## ⚙️ Installation Steps

### Prerequisites

Ensure the following are installed and running on your machine:

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) v8 or higher
- [MySQL](https://www.mysql.com/) v8 or higher (local install or cloud instance)
- A running MySQL server

### 1. Clone the Repository

```bash
git clone https://github.com/sroy3333/Full-Stack-Booking-Appointment-App.git
cd Full-Stack-Booking-Appointment-App
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages:

```
express  body-parser  mysql2  sequelize  cors  nodemon
```

### 3. Create the MySQL Database

Open MySQL client (CLI, Workbench, or DBeaver) and create the database:

```sql
CREATE DATABASE appointment_db;
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Sample MySQL connection details:

```env
# Server
PORT=3000

# MySQL Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=appointment_db
DB_DIALECT=mysql
```

### 5. Sync the Database

Sequelize will auto-create tables on first run by syncing the models defined in `models/`. No manual migration step is needed for development.

> To force a clean sync (drops and recreates all tables):
> ```bash
> # In app.js — sequelize.sync({ force: true }) — use only in dev
> ```

---

## ▶️ How to Run the Project Locally

### Development Mode (with hot reload)

```bash
npm start
```

> `nodemon app.js` is configured as the start script — the server auto-restarts on file changes.

The app will be running at: **`http://localhost:3000`**

### Manual Start (without nodemon)

```bash
node app.js
```

### Access the App in Browser

| Page | URL |
|---|---|
| Home / Landing | `http://localhost:3000/` |
| Book an Appointment | `http://localhost:3000/booking` |
| View All Appointments | `http://localhost:3000/appointments` |
| Edit Appointment | `http://localhost:3000/edit/:id` |

---

## 🔗 API Endpoints (Quick Reference)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Serve the home page |
| GET | `/appointments` | Fetch and display all appointments |
| GET | `/booking` | Serve the booking form |
| POST | `/appointments` | Create a new appointment |
| GET | `/edit/:id` | Serve the edit form for a specific appointment |
| PUT | `/appointments/:id` | Update an appointment by ID |
| DELETE | `/appointments/:id` | Delete an appointment by ID |
| POST | `/users` | Register a new user |
| GET | `/users` | Fetch all registered users |

---

## 🗄️ Database Schema (Overview)

**Users Table**

| Column | Type | Description |
|---|---|---|
| id | INT (PK, Auto-Increment) | Unique user identifier |
| name | VARCHAR(255) | Full name of the user |
| email | VARCHAR(255) | User's email address |
| phone | VARCHAR(20) | Contact phone number |
| createdAt | DATETIME | Auto-managed by Sequelize |
| updatedAt | DATETIME | Auto-managed by Sequelize |

**Appointments Table**

| Column | Type | Description |
|---|---|---|
| id | INT (PK, Auto-Increment) | Unique appointment identifier |
| date | DATEONLY | Date of the appointment |
| time | TIME | Time slot for the appointment |
| service | VARCHAR(255) | Type of service / purpose |
| status | ENUM | Pending / Confirmed / Cancelled |
| UserId | INT (FK) | Foreign key → Users.id |
| createdAt | DATETIME | Auto-managed by Sequelize |
| updatedAt | DATETIME | Auto-managed by Sequelize |

**Association:** One User `has many` Appointments; each Appointment `belongs to` one User.

---

## 🔄 Application Flow

```
Browser Request
      │
      ▼
app.js  ──▶  Express Router (routes/)
                    │
                    ▼
            Controller (controllers/)
            │              │
            ▼              ▼
      Model / ORM      View (views/)
      (Sequelize)     served as HTML
            │
            ▼
         MySQL DB
```

1. User visits a URL → Express router matches the path
2. Router delegates to the appropriate controller function
3. Controller calls the Sequelize model to read/write data
4. For GET requests, the controller serves the HTML view from `views/`
5. For POST/PUT/DELETE, the controller responds with a redirect or JSON

---

## 📦 Scripts Reference

| Script | Command | Description |
|---|---|---|
| Start (dev) | `npm start` | Starts the server with nodemon hot reload |
| Start (prod) | `node app.js` | Starts the server without nodemon |
| Install | `npm install` | Installs all dependencies from package.json |


---

<div align="center">
  <p>
    <a href="https://github.com/sroy3333/Full-Stack-Booking-Appointment-App/issues">Report a Bug</a> ·
    <a href="https://github.com/sroy3333/Full-Stack-Booking-Appointment-App/issues">Request a Feature</a> ·
    <a href="https://github.com/sroy3333/Full-Stack-Booking-Appointment-App">View Repository</a>
  </p>
</div>
