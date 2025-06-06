type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName(options: NameOptions = { firstName: "John", lastName: "Doe", title: "" }): string {
  return `${options.title} ${options.firstName} ${options.lastName}`;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe