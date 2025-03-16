import { FC } from "react";
import withStyle from "./with-style";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default withStyle(Input);
