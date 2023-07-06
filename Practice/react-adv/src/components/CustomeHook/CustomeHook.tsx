import useFetchData from "./useFetchData";

function CustomeHook() {
  const data = useFetchData("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}

export default CustomeHook;
