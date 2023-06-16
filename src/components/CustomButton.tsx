import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    // dik ? kat3eni had args rah optional
    color?:"primary" | "success" | "danger";
    onClick:()=>void;
}
const CustomButton = ({children,color="primary",onClick}:Props) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
  )
}

export default CustomButton