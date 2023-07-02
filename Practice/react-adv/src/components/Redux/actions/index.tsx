export type Action = {
  type: string;
};

export const increment = (): Action => {
  return { type: "INCREMENT" };
};

export const decrement = (): Action => {
  return { type: "DECREMENT" };
};
