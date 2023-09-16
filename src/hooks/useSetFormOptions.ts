/** @format */

import { useCallback } from "react";

/** @format */
type Obj = { [field: string]: string[] };

export const useSetFormOptions = (
  setForm: React.Dispatch<React.SetStateAction<{}>>
) => {
  const handelChange = useCallback(
    ({
      target: { value, checked, name },
    }: React.ChangeEvent<HTMLInputElement>) => {
      checked
        ? setForm((state: Obj) =>
            state[name]
              ? { ...state, [name]: [...state[name], value] }
              : { ...state, [name]: [value] }
          )
        : setForm((state: Obj) => ({
            ...state,
            [name]: state[name].filter((item) => item !== value),
          }));
    },
    [setForm]
  );

  return { handelChange };
};
