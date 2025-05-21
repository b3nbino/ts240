function filterByType<ReturnType>(arr: any[], type: string): ReturnType[] {
  return arr.filter(elem => typeof elem === type);
}