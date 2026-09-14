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

## Assignment 3: Backend Integration

### Running the project

Backend:

```bash
cd server
npm install
npm start

Frontend, in another terminal:

npm install
npm run dev
API Endpoints

Method

	

Endpoint

	

Description




GET

	

/

	

Backend health check




GET

	

/api/projects

	

Get all projects




GET

	

/api/projects/:id

	

Get one project




POST

	

/api/contact

	

Submit contact form




GET

	

/api/contact

	

Get all contact submissions

Example POST request
{
  "name": "Aishwarya",
  "email": "aishu@example.com",
  "message": "Hello"
}

GET /api/contact is intentionally open and does not require authentication.

AI Assistance Disclosure

AI assistance was used for limited implementation and debugging guidance. The code was reviewed and integrated into the project manually.


Then ensure these files exist:

```text
server/.env
server/.env.example

Finally, check your Git status and commit/push your work:

git status
git add .
git commit -m "Complete Assignment 3 backend integration"
git push