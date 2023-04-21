/** @format */

export default function useCheckBox(
  setOptions: React.Dispatch<React.SetStateAction<string[]>>
) {
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    checked
      ? setOptions((state) => [...state, value])
      : setOptions((state) => state?.filter((el) => value !== el));
  };

  return { handleCheckBox };
}
