// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT"){
    return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   };
  if (license == "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
   };
  if (license == "GNU"){
    return "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
   };
   if (license == "None"){
    return "None"
   }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  
  * [Description](#description)
  * [License](#license)
  * [Contributing](#contributing)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Installation](#installation)
  * [Questions](#questions)
  
  ## Contributing
  ${data.contributing}
  
  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## Installation
  ${data.installation}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
