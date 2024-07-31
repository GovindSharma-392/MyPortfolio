import React from 'react';
import '../styles/Projects.css';
import EmployeeManagementSystem from '../img/EMP.jpeg';
import portfolioImg from '../img/Portfolio.jpeg';
import RecipeBook from '../img/Recipebook.jpeg';
import Card from '../components/Cards'; // Ensure this path is correct

const Projects = () => {
  return (
    <section id="Projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Card
          imgSrc={RecipeBook}
          title="Recipe Book"
          description="An interactive Recipe Book app built with React.js, Material-UI, and Firebase. Users can browse, search, save recipes, and add notes. It features a sleek design and real-time updates."
          liveLink="https://recipe-book-3ut0.onrender.com/" // Add actual live link
          githubLink="https://github.com/your-username/recipe-book" // Add actual GitHub link
        />
        <Card
          imgSrc={EmployeeManagementSystem}
          title="Employee Management System"
          description="A comprehensive system for managing employee records and attendance, developed with React.js and Firebase. It features an intuitive interface and real-time updates."
          // liveLink="https://your-live-link-for-employee-management.com" // Add actual live link
          githubLink="https://github.com/your-username/employee-management-system" // Add actual GitHub link
        />
        <Card
          imgSrc={portfolioImg}
          title="Portfolio"
          description="A personal portfolio website created with React.js and Material-UI, showcasing projects, skills, and achievements. It includes a modern design and responsive layout."
          // liveLink="https://your-live-link-for-portfolio.com" // Add actual live link
          githubLink="https://github.com/your-username/portfolio" // Add actual GitHub link
        />
        {/* Uncomment and add more projects as needed */}
        {/* <Card
          imgSrc={ticTacToeImg}
          title="Tic Tac Toe"
          description="Play the classic game of Tic Tac Toe!"
          liveLink="https://your-live-link-for-tic-tac-toe.com"
          githubLink="https://github.com/your-username/tic-tac-toe"
        /> */}
        {/* <Card
          imgSrc={crudImg}
          title="CRUD Operations"
          description="Create, Read, Update, and Delete operations demo."
          liveLink="https://your-live-link-for-crud-operations.com"
          githubLink="https://github.com/your-username/crud-operations"
        /> */}
        {/* <Card
          imgSrc={thermometerImg}
          title="Thermometer"
          description="A simple thermometer application."
          liveLink="https://your-live-link-for-thermometer.com"
          githubLink="https://github.com/your-username/thermometer"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
