import React from 'react';

const Card = (props) => {
    const cardpicture=`card__picture card__picture--${props.id}`;
    const details=props.details[props.id];
    const {heading,text,link}=details;
    return (
        <div class="card">
           <div className="card__side">
            <div className={cardpicture}>
                &nbsp;
            </div>
            <div className="card__heading">
                {heading}
            </div>
            <div className="card__details">
              {text}
            </div>
            <div className="u-center">
            <a href={link} className="btn btn--github" target="_blank" rel="noreferrer"><i class="fab fa-github card__githubicon"></i>Github</a>
            </div>
            </div>   
        </div>
      );
}
 
export default Card;