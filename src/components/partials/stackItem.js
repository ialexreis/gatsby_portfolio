import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const stackItem = (props) => {
  if (props.type === "icomoon") {
    return (<div className="column is-medium is-1">
      <i className={props.icon}/>
    </div>)
  } else {
    return (
      <div className="column is-medium is-1">
        <FontAwesomeIcon icon={props.icon}/>
      </div>
    )
  }
}

export default stackItem