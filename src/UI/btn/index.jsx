/** @format */

import LoadingButton from "@mui/lab/LoadingButton";

export default function Btn({
  onClick,
  children,
  color = "success",
  loading = false,
  style,
  disabled = false,
}) {
  return (
    <LoadingButton
      sx={{ width: "100%", margin: "5px", ...style }}
      variant="contained"
      component="label"
      color={color}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </LoadingButton>
  );
}
