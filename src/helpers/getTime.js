/** @format */

export default function getTime(value) {
  const date = new Date(value);
  const day = date.getDate();
  const mouth = date.getMonth();
  const mouthParse = mouth < 10 ? `0${mouth}` : mouth;
  const year = date.getFullYear();

  return `${day}-${mouthParse}-${year}`;
}
