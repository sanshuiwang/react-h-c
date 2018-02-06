import React, {Component} from 'react';

import {SurveyEditor} from 'surveyjs-editor';
import 'surveyjs-editor/surveyeditor.css';

// import {Survey} from 'survey-react';
// import 'survey-react/survey.css';

class SurveyDemo extends Component {

  sendDataToServer = (survey) => {
      //send Ajax request to your web server.
      alert("The results are:" + JSON.stringify(survey.data));
  }

  render() {

    return(
      <div>

      </div>
    )
  }
}

export default SurveyDemo;
