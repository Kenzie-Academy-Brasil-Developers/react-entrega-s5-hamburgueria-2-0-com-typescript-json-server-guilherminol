import { TextField } from "@material-ui/core";
interface TextFieldProps {
  onChange: (e: any) => void;
  label: string;
}
const TextFieldComponent = ({ onChange, label }: TextFieldProps) => {
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
