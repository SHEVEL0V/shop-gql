/** @format */

export default function getTime(value: string): string {
  const date = new Date(value);
  const day = date.getDate();
  const mouth = date.getMonth() + 1;
  const mouthParse = mouth < 10 ? `0${mouth}` : mouth;
  const year = date.getFullYear();

  return `${day}-${mouthParse}-${year}`;
}
