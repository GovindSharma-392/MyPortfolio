import React from 'react';
import '../styles/Projects.css';
import EmployeeManagementSystem from '../img/EMP.jpeg';
import portfolioImg from '../img/Portfolio.jpeg';
import RecipeBook from '../img/Recipebook.jpeg';
import Card from './Cards';

const Projects = () => {
  return (
    <section id="Projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Card imgSrc={RecipeBook} title={"Recipe Book"} link="#RecipeBook" discription={"Unlock Culinary Masterpieces: Your Ultimate Guide to Flavorful Creations!"}/>
        <Card imgSrc={EmployeeManagementSystem} title={"EmployeeManagementSystem"} link="#RecipeBook" discription={"Empower Your Workforce: Simplify Management, Amplify Success!"}/>
        <Card imgSrc={portfolioImg} title={"Portfolio"} link="#RecipeBook" discription={"Showcase Your Brilliance: A Journey Through Your Creative Excellence!"}/>

        {/* <div className="project">
          <img src={ticTacToeImg} alt="Tic Tac Toe" className="project-img" />
          <h5>Tic Tac Toe</h5>
        </div>
        <div className="project">
          <img src={crudImg} alt="CRUD Operations" className="project-img" />
          <h5>CRUD Operations</h5>
        </div> */}
        {/* <div className="project">
          <img src={thermometerImg} alt="Thermometer" className="project-img" />
          <h5>Thermometer</h5>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
