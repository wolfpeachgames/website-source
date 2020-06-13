import React from "react"
import containerStyles from "./container.module.css"

export default function Container(props) {
  return (
    <div className={containerStyles.container}>
        {props.children}
    </div>
  )
}