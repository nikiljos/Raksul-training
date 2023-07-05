import { fetchData } from "./async";

it("should return correct todo", () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});

it("should return correct todo", async () => {
  const todo = await fetchData(2);
  expect(todo.id).toBe(2);
});
