/** @format */

export const filterRes = (data) => {
  const res = {};
  Object.keys(data)
    .filter((key) => key !== "__typename")
    .map((key) => (res[key] = data[key]));

  return res;
};
