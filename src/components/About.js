import React from 'react';
import about from '../images/about.jpg';
import Skills from './Skills';

const About = () => {
    return (
        <section className="about">
            <div className="row row--about">


                <div className="col-1-of-2 col-1-of-2--skills">
                    <h3 className="heading-secondary heading-secondary--about u-margin-bottom-small">Hi,I'm Sanjit Kurar</h3>
                    <p className="paragraph">
                        I create and build websites to communicate a feeling of joy and comfort that shall invite the user to come back.My path as a Front-End developer has led me to focus on ReactJS library.The development section is really important to me,because I thereby constantly improve my skills and stay up-to-date with new methods and technology.
            
                     </p>
                     <p className="paragraph">Bottom line: I honestly love what I do and I will do whatever it takes to escalate my career.</p>
                </div>

                <div className="col-1-of-2 col-1-of-2--skills">
                   <div className="about__imagebox">
                    <img src={about} className="about__image" alt="about"></img>
                   </div>  
           </div>

               
            </div>

           
            <Skills />
            
        </section>
      );
}
 
export default About;