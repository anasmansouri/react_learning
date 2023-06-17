import { ReactNode } from "react";
import {useState } from "react";

// 5tarina had ReactNode bach n9dero n passiw nested html code l altert bla manb9aw ndero text="ldsakfjal"
interface Props {
  children: ReactNode;
  show_altert :boolean;
  set_or_unset_altert : (x:React.SetStateAction<boolean>)=>void;
}

const Alert = ({ children,show_altert,set_or_unset_altert }: Props) => {
  // const [visible, setVisible] = useState(show_altert );
  //setVisible(show_altert);
  //const handle_make_altert_unvisible =()=>setVisible(false);
  return (
    show_altert &&<div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={()=>set_or_unset_altert(false)}
      ></button>
    </div>
  );
};

export default Alert;
