/** @format */

import TextField from "@mui/material/TextField";
import Autocomplete from "@/UI/autocomplete";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import type { ItemParams, Product } from "@/types";
type Props = {
  params: { name: string }[];
  setForm: React.Dispatch<React.SetStateAction<any>>;
  form: Product;
};

export default function FormAddOpt({ params, setForm, form }: Props) {
  const options: ItemParams[] = form?.params || [];

  const setOptions = (arr: ItemParams[]) =>
    setForm((state: {}) => ({ ...state, params: arr }));

  const handleChangeInput = (field: string, value: string, index: number) =>
    setOptions(
      options.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );

  const handleAddOptions = () =>
    setOptions([...options, { name: "", value: "" }]);

  const handleDeleteOptions = (index: number) =>
    setOptions(options.filter((_, i) => index !== i));

  const autocomplete = params.map(({ name }) => name);

  return (
    <div className="min-h-[70px] mb-4 p-2 border border-gray-400  rounded ">
      {options?.map((item, index) => (
        <div key={index} className="flex mb-2 ">
          <Autocomplete
            style={{ minWidth: "150px" }}
            options={autocomplete}
            name="name"
            onChange={(value) => handleChangeInput("name", value, index)}
            value={item.name || ""}
          />

          <TextField
            sx={{ width: "100%", marginInline: "10px" }}
            label={"value"}
            value={item.value || ""}
            onChange={(e) => handleChangeInput("value", e.target.value, index)}
          />
          <Button
            size="small"
            variant="contained"
            onClick={() => handleDeleteOptions(index)}
          >
            <DeleteIcon />
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddOptions}>
        ADD options
      </Button>
    </div>
  );
}
