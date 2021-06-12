import React from 'react';

const Skills = () => {
    return (
       <> 
    <div className="u-center u-margin-bottom-medium">
      <h2 className="heading-secondary heading-secondary--skills">
          My Skills
      </h2>
    </div>
        <div className="row row--skills">
        <div className="col-1-of-3 col-1-of-3--skills">
            <div className="heading-tertiary heading-tertiary--skills">
                HTML
            </div>
            <div className="progress-bar progress-bar--1">&nbsp;</div>   
        </div>
        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                CSS
        </div>
            <div className="progress-bar progress-bar--2">&nbsp;</div> 
        </div>
        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                Javascript
            </div>
            <div className="progress-bar progress-bar--3">&nbsp;</div> 
        </div>
       </div>
       <div className="row row--skills">
        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                Java(Core)
            </div>
            <div className="progress-bar progress-bar--4">&nbsp;</div> 
        </div>
        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                Bootstrap
            </div>
            <div className="progress-bar progress-bar--5">&nbsp;</div> 
        </div>
        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                SASS
            </div>
            <div className="progress-bar progress-bar--6">&nbsp;</div> 
        </div>
        </div>
        <div className="row row--skills">

        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                DS & ALGO
            </div>
            <div className="progress-bar progress-bar--7">&nbsp;</div> 
        </div>

        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                Redux
            </div>
            <div className="progress-bar progress-bar--8">&nbsp;</div> 
        </div>

        <div className="col-1-of-3 col-1-of-3--skills">
        <div className="heading-tertiary heading-tertiary--skills">
                SQL
        </div>
            <div className="progress-bar progress-bar--9">&nbsp;</div> 
        </div>

        </div>
      </>  
      );
}
 
export default Skills;