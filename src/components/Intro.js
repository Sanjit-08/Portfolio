import React from 'react';
import Resume from '../Resume.pdf';

const Intro = () => {
    return (
        <section className="intro">
          <div className="row">

              <div className="intro__text u-center">
                <div className="heading-primary">
                <div className="u-margin-bottom-medium u-center heading-primary--intro">SANJIT KURAR</div>
                <div className="heading-primary--sub">
                  Frontend developer who focuses on writing clean,elegant and efficient code
                </div>
                </div>
                <a href={Resume} className="u-margin-top-medium u-center btn btn--green btn--animated" download="Resume">Download My Resume</a>
              </div>
              
              

        </div>
        </section>
      );
}
 
export default Intro;