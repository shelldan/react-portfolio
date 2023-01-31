import React from 'react'
import './portfolio.css'
import IMG1 from '../../../assets/portfolio1.png'
import IMG2 from '../../../assets/portfolio2.png'
import IMG3 from '../../../assets/portfolio3.png'
import IMG4 from '../../../assets/portfolio4.jpg'
import IMG5 from '../../../assets/portfolio5.png'
import IMG6 from '../../../assets/portfolio6.jpg'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Taste Maker',
        github: 'https://github.com/shelldan/taste-makers',
        demo: 'https://shelldan.github.io/taste-makers/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fashion Quiz',
        github: 'https://github.com/shelldan/quiz',
        demo: 'https://shelldan.github.io/quiz/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Text Editor',
        github: 'https://github.com/shelldan/text-editor.git',
        demo: 'https://shelldan-text-editor.herokuapp.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining tasks and tracking progress',
        github: 'https://github.com/shelldan/',
        demo: 'https://github.com/shelldan/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com/shelldan/',
        demo: 'https://github.com/shelldan/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Figma dashboard',
        github: 'https://github.com/shelldan/',
        demo: 'https://github.com/shelldan/'
    },

]

const portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default portfolio