import { useState } from 'react';
import { Row, Col, Collapse } from 'react-bootstrap';

export const Skills = () => {
    const [openCategories, setOpenCategories] = useState([]);

    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Java' },
                { name: 'Python' },
                { name: 'HTML, CSS, JavaScript, Typescript' },
                { name: 'React JS, Angular JS' },
                { name: 'Node.js, Spring Boot, REST APIs, Postman' }
            ]
        },
        {
            title: 'Cloud Technologies',
            skills: [
                { name: 'Amazon Web Services' },
                { name: 'Docker' },
                { name: 'Kubernetes' }
            ]
        },
        {
            title: 'Data Management/Analysis',
            skills: [
                { name: 'MySQL, NoSQL, MongoDB' },
                { name: 'Numpy, Pandas, TensorFlow, SciKit-Learn, Matplotlib' },
                { name: 'Natural Language Processing, Spacy, NLTK' },
                { name: 'Tableau' }
            ]
        },
        {
            title: 'Others',
            skills: [
                { name: 'GIT' },
                { name: 'Linux' },
                { name: 'Unit Testing' },
                { name: 'Agile methodologies' }
            ]
        }
    ];

    const handleCategoryToggle = (index) => {
        if (openCategories.includes(index)) {
            setOpenCategories(openCategories.filter(item => item !== index));
        } else {
            setOpenCategories([...openCategories, index]);
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>I'm the jack of all skills, master of some, and always ready for new ones along the way!</p>

                            <Row>
                                {skillCategories.map((category, index) => (
                                    <Col key={index} xs={12}>
                                        <div className="column-box">
                                            <button
                                                onClick={() => handleCategoryToggle(index)}
                                                className={`category-button ${openCategories.includes(index) ? 'open' : ''}`} // Use the CSS class for button style
                                                aria-controls={`category-${index}`}
                                                aria-expanded={openCategories.includes(index)}
                                            >
                                                {category.title}
                                            </button>
                                            <Collapse in={openCategories.includes(index)}>
                                                <div id={`category-${index}`} className="category-content"> 
                                                    {category.skills.map((skill, skillIndex) => (
                                                        <div key={skillIndex} className="skill-box">
                                                            <div className="skill-content">
                                                                <div className="skill-name">{skill.name}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
