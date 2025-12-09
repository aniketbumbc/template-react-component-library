import React from 'react';


interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({ label, onClick, disabled = false, className }: ButtonProps) => {
    return <button onClick={onClick} disabled={disabled} className={className}>{label}</button>;
};

export default Button;