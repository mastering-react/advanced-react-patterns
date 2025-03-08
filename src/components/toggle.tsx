import { forwardRef, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

export type ToggleProps = {
  className?: string;
  children?: React.ReactNode | ((checked: boolean) => React.ReactNode);
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "checked" | "defaultChecked" | "value" | "onChange"
  >;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      children,
      checked: checkedProps,
      defaultChecked,
      value,
      onChange,
      disabled,
      inputProps,
    },
    ref
  ) => {
    const [checked, setChecked] = useState(
      defaultChecked || checkedProps || false
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        onChange?.(e);
      },
      []
    );

    return (
      <label className={"inline-flex cursor-pointer items-center gap-1"}>
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            checked={checked}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            {...inputProps}
          />
          <div
            className={twMerge(
              "h-5 w-9 rounded-full transition-colors duration-100 peer-focus:outline-none",
              checked ? "bg-purple-500" : "bg-slate-200 dark:bg-slate-700",
              disabled && "cursor-not-allowed opacity-50",
              className
            )}
          ></div>
          <div
            className={twMerge(
              "absolute transform rounded-full bg-slate-50 transition-all duration-150 peer-checked:translate-x-full peer-checked:border-white dark:bg-slate-200 top-[2px] left-[2px] h-4 w-4",
              className
            )}
          ></div>
        </div>

        {typeof children === "function" ? children(checked) : children}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
