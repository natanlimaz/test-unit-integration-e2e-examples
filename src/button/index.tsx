import { ReactNode } from 'react';


type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
}

export function Button({children, onClick, disabled}: ButtonProps) {

    return (
        <button 
            style={{
                padding: 8,
                color: '#FFF',
                backgroundColor: disabled ? "#FAFAFA" : "#121212"
            }}
            onClick={onClick}
        
        >
            {children}
        </button>
    );
}