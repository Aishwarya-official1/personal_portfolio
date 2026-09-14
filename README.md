ASSIGNMENT 3 SCREEN RECORDING 
view the screen recording:: https://drive.google.com/file/d/1BfNYvTzhbqxZc97pR9KavFdl4XtBL2FE/view?usp=sharing

1.Portfolio React App
drive link::\
https://drive.google.com/file/d/1NrjdAp2yIWimmSzO6XSjzGDwBTduUOFC/view?usp=sharing


This is my Assignment 1 static portfolio (HTML/CSS) converted into React, using components, props, state, useEffect, and routing.

2.How to run it

npm install npm run dev -> runs it locally npm run build -> production build, no errors npm run preview -> preview the build

3.Component tree

App

ThemeProvider (holds theme state + toggle function using Context)
Routes
Layout (Navbar + Footer stay fixed, page content changes via Outlet)
Home (/home)
About (/about) - also renders Skills
Projects (/projects) - maps over project data, renders a ProjectCard for each
ProjectCard -> passes techStack down to TechStack (this is my 2-level prop drilling)
ProjectDetail (/projects/:projectId) - reads the id from the url with useParams
Contact (/contact) - renders ContactForm
NotFound (catches any other url)


4.Prop drilling

projects.js has all my project data as an array. The Projects page loops over it and passes each project's fields into ProjectCard as props. ProjectCard doesn't have anything hardcoded in it, it's fully driven by whatever props it gets. Then ProjectCard passes just the techStack array one level further down into a TechStack component, which is the 2nd level of drilling the assignment asks for.

5.

Theme (dark/light) - I put this in a Context at the top of App instead of just using useState inside one component, because the toggle button is in the Navbar but I also need the theme value in index.css/html itself. If I tried to pass it as a normal prop I'd have to pass it through Layout -> Navbar which is annoying, so Context made more sense here. It's still just useState under the hood, wrapped in a Provider - not an external library.

Contact form - this state (name/email/message + errors) only matters inside the ContactForm component itself, nothing outside needs it, so I just kept it local with useState instead of lifting it anywhere.

View Details on project cards - each ProjectCard has its own expanded state. Since state in React is scoped per component instance, opening one card doesn't affect the others, which I tested by expanding two cards at once.

6.useEffect hooks I used
Home.jsx - runs once when the page loads ([] dependency), uses setTimeout to fake a ~1 second loading delay before showing the hero text. Cleans up the timer if the component unmounts early.
ThemeContext.jsx - runs every time theme changes . Saves the theme to localStorage and updates the data-theme attribute on <html> so the CSS variables switch. This is also how the theme survives a page refresh.
Navbar.jsx - runs once on mount, adds a window resize listener so the mobile menu auto-closes if you resize back to desktop width. Removes the listener on unmount so it doesn't leak.



6. Backend Integration

For Assignment 3, I added a Node.js and Express backend to the portfolio website.

The backend provides project data through API endpoints and handles contact form submissions.

The project data used by the backend is stored in:

server/data/projects.js

The frontend now fetches project data from the backend instead of depending only on the local project array.

Backend API Endpoints
Method	Endpoint	Description
GET	/	Checks whether the backend is running
GET	/api/projects	Returns all projects
GET	/api/projects/:id	Returns one project using its ID
POST	/api/contact	Validates and stores a contact submission
GET	/api/contact	Returns all stored contact submissions

If an invalid project ID is requested, the backend returns a 404 response:

{
  "error": "Project not found"
}

If an invalid route is requested, the backend returns:

{
  "error": "Route not found"
}
Contact API

The contact form sends a POST request to:

http://localhost:5050/api/contact

Example request body:

{
  "name": "Aishwarya",
  "email": "aishu@example.com",
  "message": "Hello"
}

A successful submission returns HTTP status 201.

The backend validates the required fields and checks the email format before storing the submission.

The GET /api/contact endpoint is intentionally open and does not require authentication, as required for this assignment.

Environment Variables

The backend uses dotenv for configuration.

The .env.example file contains the required environment variable names:

PORT=5050
CLIENT_ORIGIN=http://localhost:5173

The actual .env file is not included in the repository.

Example API Tests

Check the backend:

curl http://localhost:5050/

Get all projects:

curl http://localhost:5050/api/projects

Get one project:

curl http://localhost:5050/api/projects/abac-policy-compiler

Test an invalid project ID:

curl http://localhost:5050/api/projects/invalid-id

Submit a contact form:

curl -X POST http://localhost:5050/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"Aishwarya","email":"aishu@example.com","message":"Hello"}'

Get contact submissions:

curl http://localhost:5050/api/contact

Test an invalid route:

curl http://localhost:5050/api/unknown
AI Assistance Disclosure

AI assistance was used for limited implementation guidance and debugging. I reviewed the code, integrated the changes into my project, and tested the application manually.
