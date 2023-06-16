import { ReactNode } from "react";


// 5tarina had ReactNode bach n9dero n passiw nested html code l altert bla manb9aw ndero text="ldsakfjal"
interface Props{
    children: ReactNode;
}


const Alert = ({children}:Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert