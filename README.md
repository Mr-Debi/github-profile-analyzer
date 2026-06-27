# GitHub Profile Analyzer API

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** that fetches public GitHub user information using the GitHub Public API, stores useful profile insights in a MySQL database, and provides endpoints to manage and retrieve the analyzed profiles.

---

## Features

- Fetch GitHub user profile by username
- Store profile insights in MySQL
- Update existing profile if already analyzed
- Retrieve all analyzed profiles
- Retrieve a single analyzed profile
- Delete a stored profile
- RESTful API design
- Environment variable support using dotenv

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Axios
- mysql2
- dotenv
- CORS

---

## Project Structure

```
github-profile-analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── githubController.js
│
├── models/
│   └── profileModel.js
│
├── routes/
│   └── githubRoutes.js
│
├── services/
│   └── githubService.js
│
├── .env
├── app.js
├── package.json
├── README.md
└── database.sql
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-profile-analyzer.git
```

### 2. Navigate to the project folder

```bash
cd github-profile-analyzer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=github_analyzer
```

---

## Database Setup

Create the database:

```sql
CREATE DATABASE github_analyzer;
```

Use the database:

```sql
USE github_analyzer;
```

Create the table:

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    company VARCHAR(255),
    location VARCHAR(255),
    public_repos INT,
    followers INT,
    following INT,
    public_gists INT,
    avatar_url TEXT,
    profile_url TEXT,
    created_at_github DATETIME,
    updated_at_github DATETIME,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Run the Application

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

# API Endpoints

## Check API Status

**GET**

```
/api
```

Response

```json
{
  "success": true,
  "message": "GitHub Profile Analyzer API is Running"
}
```

---

## Analyze GitHub Profile

Fetches profile from GitHub and stores it in MySQL.

**GET**

```
/api/analyze/:username
```

Example

```
GET /api/analyze/octocat
```

---

## Get All Stored Profiles

**GET**

```
/api/profiles
```

---

## Get Single Stored Profile

**GET**

```
/api/profile/:username
```

Example

```
GET /api/profile/octocat
```

---

## Delete Profile

**DELETE**

```
/api/profile/:username
```

Example

```
DELETE /api/profile/octocat
```

---

## GitHub API Used

```
https://api.github.com/users/{username}
```

---

## Testing

The API can be tested using:

- Postman
- Thunder Client
- cURL

---

## Dependencies

```
express
axios
mysql2
dotenv
cors
nodemon
```

---

## Future Improvements

- Authentication using JWT
- Pagination
- Search functionality
- API rate limiting
- Swagger API documentation
- Docker support
- Logging with Winston/Morgan
- Unit testing

---

## Author

**Debidutta Behera**

Software Engineer

Gmail: debidutta.db@gmail.com

GitHub: https://github.com/Mr-Debi

LinkedIn: https://www.linkedin.com/in/debidutta-behera-164642275/

Portfolio: https://portfolio-delta-three-wtvzpb5j1p.vercel.app/


---

## License

This project is developed for educational and assessment purposes.