// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache 2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GNU General Public v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === "BSD 2-Clause Simlified"){
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === "BSD 3-Clause New or Revised")
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  else if (license === "The Unlicense")
  return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
}

// Function that returns the license link
function renderLicenseLink(license) {}

// Function that returns the license section of README
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}
## Usage

${data.usage}

## License

${data.license}

## Contributions

${data.contribute}

## Tests

${data.tests}

## Questions
<ul>
<li> <a href = "https://github.com/${data.username}">github profile</a>
</li>
<li> <a href = "mailto:${data.email}">email </a> </li>
</li>
  `;
}

module.exports = generateMarkdown;
