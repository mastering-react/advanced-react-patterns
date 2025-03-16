import { FC } from "react";
import withStyle from "./with-style";

type TextareaProps = {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<TextareaProps> = (props) => {
  return <textarea {...props} />;
};

export default withStyle(Textarea);
