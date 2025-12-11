import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({ label, onClick, disabled = false, className = '' }: ButtonProps) => {
    const baseClass = 'button';
    const classes = className ? `${baseClass} ${className}` : baseClass;
    return <button onClick={onClick} disabled={disabled} className={classes}>{label}</button>;
};

export default Button;