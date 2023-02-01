// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const icons = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  }
  return icons[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const iconLinks = {
    mit: 'https://opensource.org/licenses/MIT',
    eclipse: 'https://opensource.org/licenses/EPL-1.0',
    mozilla: 'https://opensource.org/licenses/MPL-2.0',
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

   ## Description <a id="Description"></a>
   ${data.description}

   ## Installation <a id="Installation"></a>
   ${data.installation}

   ## Usage <a id="Usage"></a>
   ${data.usage}

   ## License <a id="License"></a>
   ${renderLicenseSection(data.license)}


   ## Contributing <a id="Contributing"></a>
   ${data.contributing}

   ## Test <a id="Test"></a>
   ${data.test}

   ## Questions <a id="Questions"></a>
   [${data.github}](https://github.com/${data.github})
   ${data.email}
`;
}

module.exports = generateMarkdown;
