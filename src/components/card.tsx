import { FC } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {} & React.HTMLAttributes<HTMLDivElement>;

const BaseCard: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        "bg-white shadow-md rounded-md border border-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge("border-b border-gray-300 p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <h2 className={twMerge("font-bold text-lg", className)} {...props}>
      {children}
    </h2>
  );
};

const CardBody: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={twMerge("p-4", className)} {...props}>
      {children}
    </div>
  );
};

const CardFooter: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge("border-t border-gray-300 p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Card = Object.assign(BaseCard, {
  Header: CardHeader,
  Title: CardTitle,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
