// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.Title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.Description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Github](#github)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Github
  [Github Profile](https://github.com/${data.Github})
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}.
   You can view more of my projects at https://github.com/${data.Github}.
   
`;
}


// import markdown file 
module.exports = generateMarkdown;