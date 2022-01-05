// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![](https://img.shields.io/badge/license-${license}-green)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # Your Project Title 
    ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation 
    ${data.installation}

  ## Usage

  ## License 
    ${data.license}

  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
