interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  let name = userInfo.name;
  let email = userInfo.email ?? "N/A";
  let age = userInfo.age ?? "unknown";

  return `${name} is ${age} years old. You can reach her at ${email}`;
}