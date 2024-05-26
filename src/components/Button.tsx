import Link from "next/link";

type ColorOption = "white" | "black" | "green" | "red";
type WidthOption = "large" | "normal";

type ButtonProps = {
  children: string;
  href: string;
  color?: ColorOption;
  width?: WidthOption;
};

const Button = ({ children, href, color, width = "large" }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`rounded-md py-3 px-4 font-semibold text-sm text-center ${
        width === "large" ? "w-full" : "w-fit"
      } ${color !== "white" && "text-white"} ${
        color === "white" && "bg-white ring-1 ring-gray-300 text-black"
      } ${color === "green" && "bg-green-600"} ${
        color === "red" && "bg-red-light"
      } ${color ? color : "bg-black"}`}
    >
      {children}
    </Link>
  );
};

export default Button;
