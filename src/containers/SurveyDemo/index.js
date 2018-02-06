import React, {Component} from 'react';

// import {SurveyEditor} from 'surveyjs-editor';
// import 'surveyjs-editor/surveyeditor.css';

import {Survey,SurveyWindow} from 'survey-react';
import 'survey-react/survey.css';

class SurveyDemo extends Component {

  sendDataToServer = (survey) => {
      //send Ajax request to your web server.
      alert("The results are:" + JSON.stringify(survey.data));
  }

  render() {
    const surveyJSON = {
      pages:[{
          name:"page1",
          elements:[{
            type:"text",
            name:"question3"
          },{
            type:"text",
            name:"question2"
          },{
            type:"text",
            name:"name",
            title:"Please enter your name:",
            isRequired:true,
            placeHolder:"Jon Snow"
          },{
            type:"text",
            name:"birthdate",
            title:"Your birthdate:",
            isRequired:true
          },{
            type:"text",
            name:"color",
            title:"Your favorite color:",inputType:"color"
          }]
      }]
    };

    return(
      <div>
        <Survey json={ surveyJSON } onComplete={ this.sendDataToServer } />
      </div>
    )
  }
}

export default SurveyDemo;
