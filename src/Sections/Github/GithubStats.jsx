import React from 'react'
import "./GithubStats.css";
import GitHubCalendar from "react-github-calendar";
const GithubStats = () => {
    
  return (
    <>
      <div id='github'>
      <div id="github-heading">
            <h1>Github <span>Submissions</span></h1>
        </div>
        <div className="Github-calendar">
        <h1 className="Calendar">GitHub Calendar</h1>

        <GitHubCalendar
          username="gauravraj2601"
          blockSize={15}
          blockMargin={5}
          fontSize={18}
          margin="auto"
        />
      </div>
      <div id="stats-heading">
            <h1>Github <span>Stats</span></h1>
        </div>
        <div className="github-streaks">
          <div id="github-streak-stats-div">
            <img
              id="github-streak-stats"
              src="https://camo.githubusercontent.com/15ee1b21e24c0b2cfdfdc90b32f75830783a152451b5a0d4659b91aa4f30f336/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d67617572617672616a3236303126"
              alt="github streak"
            />
          </div>
          <div id="github-stats-card-div">
            <img
              id="github-stats-card"
              src="https://camo.githubusercontent.com/6414514381dd7d18e46e44caf7497381a75d0057fbc3dda67c64047c5005c363/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d67617572617672616a323630312673686f775f69636f6e733d74727565266c6f63616c653d656e"
              alt="stats"
            />
          </div>
        </div>
        <div id="github-top-langs-div">
          <img
            id="github-top-langs"
            src="https://camo.githubusercontent.com/6b2e2a53467575202898db35ab2d35110f4cedcc82ad0a8edf2970c3de502e32/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d67617572617672616a323630312673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt="Most used lang"
          />
        </div>
      </div>
      
    </>
  )
}

export default GithubStats;
