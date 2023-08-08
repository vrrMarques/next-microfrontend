import React from "react";

const Button = ({ className, style, label }) => {
    
    return <button className={className} style={style}>{label}</button>;
};

export default Button;
