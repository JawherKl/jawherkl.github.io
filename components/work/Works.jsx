/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const[item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            return project.category === item.name;
          });
          setProjects(newProjects);
        }
        setCurrentPage(1);
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span 
                        onClick={(e) => handleClick(e, index)} 
                        className={`${active === index ? 'active-work' : ''} work__item`} 
                        key={index}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {currentProjects.map((item) => (
                    <WorksItems item={item} key={item.id} />
                ))}
            </div>

            {projects.length > itemsPerPage && (
                <div className="pagination">
                    <button 
                        onClick={() => setCurrentPage(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="pagination__btn"
                    >
                        ◀ Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`pagination__btn ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        onClick={() => setCurrentPage(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="pagination__btn"
                    >
                        Next ▶
                    </button>
                </div>
            )}
        </div>
    )
}

export default Works