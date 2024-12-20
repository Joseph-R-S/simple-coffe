import React from "react"
import './button.css'

interface ButtonProps {
    description:string
}
const Button: React.FC<ButtonProps> = ({description}) => {
    return(
        <button className="boton">{description}</button>
    )
}

export default Button