import React from "react"

export default function Header(props) {
  return (
    <h1 style={{fontSize: "60px"}}>
      {props.children}
    </h1>
  )
}
