"use strict";
function formatName(options = { firstName: "John", lastName: "Doe", title: "" }) {
    return `${options.title} ${options.firstName} ${options.lastName}`;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
