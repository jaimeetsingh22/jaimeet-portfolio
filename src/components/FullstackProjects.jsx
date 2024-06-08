import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from "../assets/data.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const FullstackProjects = () => {
    return (
        <>

            <div id="project">
                <h2>FULLSTACK PROJECTS</h2>
                <section>
                    <article>
                        <Carousel
                            // showArrows={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={2000}
                            showIndicators={false}
                            showStatus={false}
                            showThumbs={false}

                        >
                            {
                                data['fullstack-projects'].map(i => (
                                    <div key={i.title} className='workItem'>
                                        <img src={i.imgSrc} alt={i.title} />
                                        <aside>
                                            <h3>{i.title}</h3>
                                            <p>{i.description}</p>
                                            <a href={i.url} target={"_blank"}>View Demo</a>
                                        </aside>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </article>
                </section>
            </div>
        </>

    )
}

export default FullstackProjects;