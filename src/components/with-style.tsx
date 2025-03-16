import React from "react";
import { twMerge } from "tailwind-merge";

export default function withStyle(Component: React.FC) {
  return (props: any) => {
    const className = twMerge(
      props.className,
      "border w-full px-4 py-1.5 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    );

    const style = {
      ...props.style,
    };

    return <Component {...props} className={className} style={style} />;
  };
}
