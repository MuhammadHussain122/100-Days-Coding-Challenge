/* Pulling Apart a Nested Object:
Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools,
and software frameworks. Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific
pieces of information.
*/
var programmerSkills = {
    languages: ["C", "Java", "Javascript", "Typescript", "Python",],
    tools: ["git", "github", "Webpack", "Docker"],
    frameworks: ["Next.js", "Vue", "Angular", "Django", "Express.js"],
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameworks = programmerSkills.frameworks;
console.log("Languages: ".concat(languages, ",\nTools: ").concat(tools[1], ",\nFrameworks: ").concat(frameworks));
