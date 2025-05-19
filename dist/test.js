"use strict";
function formatName({ firstName = "John", lastName = "Doe", title = "" }) {
    return title + firstName + " " + lastName;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
