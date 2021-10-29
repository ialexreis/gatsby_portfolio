import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const stackItem = (props) => {
    return (
      <div className="column is-medium is-3">
        <props.icon />
      </div>
    )
}

export default stackItem