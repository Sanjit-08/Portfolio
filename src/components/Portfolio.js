import React from 'react';
import Card from './Card';

const Portfolio = () => {
    const details={
        "1":{
            heading:"Natours Project",
            text:"This is a project covering different aspects of advanced CSS,grid system and a fully responsive website made using SASS!!",
            link:"https://github.com/Sanjit-08/Natours/tree/master"
        },
        "2":{
            heading:"Facebook Messenger Clone",
            text:"This is a simple facebook messenger clone built using ReactJS and connected with the firestore database of Firebase. Also,to style UI Material UI has been used extensively!!",
            link:"https://github.com/Sanjit-08/facebookmessengerclone",
        },
        "3":{
            heading:"Pizza Store",
            text:" A simple single page web application built fully on ReactJS library. It is a simple pizza store allowing users to manage the inventory,order and add & remove items from their store. It includes Firebase Realtime Database integration and is deployed through Netlify.",
            link:"https://github.com/Sanjit-08/PizzaStore"
        },
        "4":{
            heading:"Posts Store",
            text:"This App focuses on Axios network requests made to an open source API. The frontend part of the application is built through ReactJS and the collective data of the App is maintained through Redux.",
            link:"https://github.com/Sanjit-08/PostsApp"
            
        },
        "5":{
            heading:"Book List",
            text:"This app keeps a track of your favorite books as a reminder which you have to read. The App uses the concept of React hooks and Context API . The data is stored on your device's local storage.",
            link:"https://github.com/Sanjit-08/BookList"
        },
        "6":{
            heading:"ToDo List",
            text:"This is a ToDo tasks app to give a reminder of the tasks we have to do.It is built purely through ReactJS and the data is stored and manipulated in the App through Firestore in Firebase!!",
            link:"https://github.com/Sanjit-08/Todo-App"
        },
        "7":{
            heading:"Weather Teller",
            text:"This is an app that displays weather of every city which we enter.The data is fetched from a popular API called Weather API. The App uses Vanilla JS ,knowledge of fetch and promises and some basic CSS!!",
            link:"https://github.com/Sanjit-08/weather"
        }

    }
    return (
        <div className="portfolio">
            <div className="u-center u-margin-bottom-medium heading-secondary heading-secondary--project">
                Projects
            </div>

            <div className="row row--portfolio">
                <div className="col-1-of-3">
                  <Card details={details} id="1" />
                </div>
                <div className="col-1-of-3">
                 <Card details={details} id="2" />
                </div>
                <div className="col-1-of-3">
                  <Card details={details} id="3" />
                </div>
            </div>

            <div className="row row--portfolio">
                <div className="col-1-of-3">
                  <Card details={details} id="4" />
                </div>
                <div className="col-1-of-3">
                 <Card details={details} id="5" />
                </div>
                <div className="col-1-of-3">
                  <Card details={details} id="6" />
                </div>
            </div>

            <div className="row row--portfolio">
                <div className="col-1-of-3">
                <Card details={details} id="7" />
                </div>
            </div>
        </div>
      );
}
 
export default Portfolio;