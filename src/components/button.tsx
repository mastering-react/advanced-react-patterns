import { FC } from "react";
import withStyle from "./with-style";
import { twMerge } from "tailwind-merge";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        props.className,
        "bg-blue-500 text-white hover:bg-blue-600 ring-offset-1"
      )}
    />
  );
};

export default withStyle(Button);
