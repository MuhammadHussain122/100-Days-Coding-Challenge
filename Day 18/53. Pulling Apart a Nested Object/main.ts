/* Pulling Apart a Nested Object: 
Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, 
and software frameworks. Find a way to get three specific skills from this list and show them.

Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific 
pieces of information.
*/

let programmerSkills = {
  languages: ["C","Java","Javascript","Typescript","Python",],
  tools: ["git","github","Webpack","Docker"],
  frameworks: ["Next.js","Vue","Angular","Django","Express.js"],
};
let {languages, tools, frameworks}= programmerSkills
console.log(`Languages: ${languages},\nTools: ${tools[1]},\nFrameworks: ${frameworks}`);
