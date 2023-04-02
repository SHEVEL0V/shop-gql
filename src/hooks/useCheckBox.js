/** @format */

export default function useCheckBox(setOptions) {
  const handleCheckBoxArray = (e) => {
    const { checked, value } = e.target;
    checked
      ? setOptions((state) => [...state, value])
      : setOptions((state) => state.filter((el) => value !== el));
  };
  //---------------------------------------------------------------------
  const handleCheckBoxObject = (e) => {
    const { checked, value, name } = e.target;
    checked
      ? setOptions((state) =>
          state.hasOwnProperty(name)
            ? { ...state, [name]: [...state[name], value] }
            : { ...state, [name]: [value] }
        )
      : setOptions((state) => ({
          ...state,
          [name]: state[name].filter((e) => e !== value),
        }));
  };

  return { handleCheckBoxArray, handleCheckBoxObject };
}
