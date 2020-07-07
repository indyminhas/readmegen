// function to generate markdown for README
function generateMarkdown(data, badge) {
  return `# ${data.title} ${badge}
  ${data.description}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [Tests](#Tests)
  5. [License](#License)
  6. [Questions](#Questions)
  ## Installation
       ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributions}
  ## Tests
       ${data.test}
  ## License
  >${data.license} ${data.licenseAlt}
  ## Questions
  * GitHub: [${data.gitHub}](https://github.com/${data.gitHub})
  * Email: [${data.email}](mailto:${data.email})
  
  ${data.questions}
`
};

module.exports = generateMarkdown;