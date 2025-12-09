import React from 'react';


interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
};

export default Button;