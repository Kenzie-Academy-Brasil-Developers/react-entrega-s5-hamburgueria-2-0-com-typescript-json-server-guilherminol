import { TextField } from "@material-ui/core";
interface TextFieldProps {
  onChange: (e: any) => void;
  label: string;
  register?: (param: any) => void;
}
const TextFieldComponent = ({ onChange, label, register }: TextFieldProps) => {
  return (
    <TextField
      variant="outlined"
      required
      onChange={onChange}
      label={label}
      fullWidth
    />
  );
};
export default TextFieldComponent;
