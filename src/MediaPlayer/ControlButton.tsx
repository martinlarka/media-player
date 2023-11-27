import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ControlButtonProps = {
  icon: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ControlButton = ({
  icon,
  className,
  ...props
}: ControlButtonProps) => {
  return (
    <button className={twMerge(className, "bg-slate-400")} {...props}>
      <img src={icon} className="logo react" alt="React logo" />
    </button>
  );
};
