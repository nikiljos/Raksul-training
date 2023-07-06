export const fetchData = async (id: number) => {
  const results: any = (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  ).json();
  return results;
};
