async function getData(url: string): Promise<void> {
  try {
    let data = await fetch(url);
    let json = await data.json();
    
    console.log(json);
  } catch(e: unknown) {
    if(e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("An unknown error occurred" + e);
    }
  }
}