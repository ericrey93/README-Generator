// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const icons = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  }
  return icons[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const iconLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Eclipse: 'https://opensource.org/licenses/EPL-1.0',
    Mozilla: 'https://opensource.org/licenses/MPL-2.0',
}
return iconLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// tagged every area that will be linked with user input with a parameter to pull values.
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
   - [Project description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributing](#Contributing)
   - [Test](#Test)
   - [Questions](#Questions)

   ## Description
   ${data.description}

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## License
   ${renderLicenseSection(data.license)}


   ## Contributing
   ${data.contributing}

   ## Test
   ${data.test}

   ## Questions
   ${data.github}
   ${data.email}
`;
}

module.exports = generateMarkdown;
