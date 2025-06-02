function isNumber(foo: any): foo is number {
  return typeof foo === "number"; 
}

function safeGet<T>(arr: T[], index: number): T | undefined {
  if(index >= 0 && index < arr.length) {
    return arr[index];
  }

  return undefined;
}