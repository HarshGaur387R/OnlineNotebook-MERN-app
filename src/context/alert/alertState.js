import AlertContext from "./alertContext";
import { useState } from "react";

export default function AlertState(props) {

  const [alertState, setAlertState] = useState({ show: false, heading: '', para: '', variant: '' });

  return (
   <AlertContext.Provider value={{alertState, setAlertState}}>
    {props.children}
   </AlertContext.Provider>
  )
}
