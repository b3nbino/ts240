interface UserData {
  name: string;
  age: number;
  email: string;
}

type PropertyNames = keyof UserData;

function printValue(user: UserData, key: PropertyNames): void {
  console.log(user[key]);
}