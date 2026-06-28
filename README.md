# 🚀 GitHub Profile Analyzer API

A RESTful backend service built with **Node.js**, **Express.js**, and **MySQL** that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.

## 🌐 Live Demo

**Live API:**  
https://github-profile-analyzer-jxkd.onrender.com/api/analyze/Mr-Debi

## 📂 GitHub Repository

https://github.com/Mr-Debi/github-profile-analyzer

---

# 📌 Features

- Analyze any public GitHub profile
- Fetch profile data using GitHub Public API
- Store profile insights in MySQL
- Update existing profile if already analyzed
- Fetch all analyzed profiles
- Fetch a single profile by username
- Delete a stored profile
- RESTful API architecture
- Cloud deployment using Render
- MySQL database hosted on Railway

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- MySQL2
- Axios
- Dotenv
- CORS
- GitHub REST API
- Railway MySQL
- Render

---

# 📁 Project Structure

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
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── README.md
├── github_analyzer.sql
└── GitHub Profile Analyzer API.postman_collection.json
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Mr-Debi/github-profile-analyzer.git

cd github-profile-analyzer
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment File

Create a `.env` file in the project root.

```env
PORT=5000

DB_HOST=YOUR_DATABASE_HOST
DB_PORT=3306
DB_USER=YOUR_DATABASE_USER
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_NAME=YOUR_DATABASE_NAME
```

---

## 4. Create Database

Import the provided SQL file:

```
github_analyzer.sql
```

or execute the SQL manually.

---

## 5. Start the Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server runs on

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Health Check

### GET

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

### GET

```
/api/analyze/:username
```

Example

```
GET /api/analyze/octocat
```

---

## Get All Profiles

### GET

```
/api/profiles
```

---

## Get Single Profile

### GET

```
/api/profile/:username
```

Example

```
/api/profile/octocat
```

---

## Delete Profile

### DELETE

```
/api/profile/:username
```

Example

```
DELETE /api/profile/octocat
```

---

# 🗄 Database Schema

Table Name

```
github_profiles
```

Stores

- Username
- Name
- Bio
- Company
- Location
- Public Repositories
- Followers
- Following
- Public Gists
- Avatar URL
- GitHub Profile URL
- GitHub Account Created Date
- GitHub Account Updated Date
- Analysis Timestamp

---

# 📮 Postman Collection

The Postman collection is included in the repository.

```
GitHub Profile Analyzer API.postman_collection.json
```

---

# 🚀 Deployment

Backend

- Render

Database

- Railway MySQL

---

# 📷 Sample API URLs

Health Check Example

```
GET https://github-profile-analyzer-jxkd.onrender.com/api
```

Analyze Profile

```
GET https://github-profile-analyzer-jxkd.onrender.com/api/analyze/octocat
```

Get All Profiles

```
GET https://github-profile-analyzer-jxkd.onrender.com/api/profiles
```

Get Profile

```
GET https://github-profile-analyzer-jxkd.onrender.com/api/profile/octocat
```

Delete Profile

```
DELETE https://github-profile-analyzer-jxkd.onrender.com/api/profile/octocat
```

---

# 💡 Future Improvements

- Authentication using JWT
- Swagger API Documentation
- Pagination
- Search and Filtering
- Request Validation
- Rate Limiting
- Unit Testing (Jest)
- Docker Support
- GitHub API Caching

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