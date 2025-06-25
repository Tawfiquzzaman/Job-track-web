# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Live Site Link: https://mrtopic-job-explore.netlify.app/

## Description:
Job Track Website is a ReactJS web application that allows users to authenticate securely, browse job listings fetched from a JSON file, and apply for jobs—all through a simple and intuitive interface.

## Home Page:
![image](https://github.com/user-attachments/assets/52223968-f621-4102-ad9d-2fb7b2d6c618)

## 🛠️ Technologies Used

- **ReactJS** – Frontend library for building user interfaces
- **Firebase Authentication** – For user authentication and secure login
- **JSON** – Used as the data source for job listings
- **CSS3** – Styling the application for a clean and responsive design

## 🔍 Main Features

- 🔐 **User Authentication** – Secure login and signup using Firebase Authentication
- 📄 **Job Listings** – Fetch and display job data from a JSON file
- 📝 **Apply for Jobs** – Users can apply to jobs directly through the platform
- 📱 **Responsive Design** – Works well on both desktop and mobile devices

## 📦 Dependencies

- **react** – Core React library for building user interfaces
- **react-dom** – DOM-specific methods for React
- **firebase** – Firebase SDK for authentication
- **react-router-dom** – Routing library for navigation
- **axios** (optional) – For HTTP requests if used, otherwise can be omitted
- **prop-types** (optional) – For type checking of React props if used

## 🚀 How to Run This Project Locally

Follow these steps to set up and run the Job Track Website on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-track-website.git
cd job-track-website

### 2. Install dependencies
npm install

### 3. Configure Firebase
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

### 4. Run the app
npm run dev

The app will open in your default browser at http://localhost:3000.



