import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { ButtonType } from '../../types/calculator';

interface CalculatorButtonProps {
    label: string;
    value: string;
    type: ButtonType;
    onClick: (value: string) => void;
    className?: string;
    disabled?: boolean;
}

export const CalculatorButton = ({
    label,
    value,
    type,
    onClick,
    className,
    disabled = false
}: CalculatorButtonProps) => {
    const getButtonVariant = () => {
        switch (type) {
            case 'operator':
                return 'default';
            case 'special':
                return 'secondary';
            default:
                return 'outline';
        }
    };

    const getButtonClasses = () => {
        const baseClasses = 'h-14 text-lg font-semibold transition-all duration-150 active:scale-95';

        switch (type) {
            case 'operator':
                return cn(
                    baseClasses,
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                    'focus:ring-2 focus:ring-primary focus:ring-offset-2'
                );
            case 'special':
                return cn(
                    baseClasses,
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                    'focus:ring-2 focus:ring-secondary focus:ring-offset-2'
                );
            default:
                return cn(
                    baseClasses,
                    'bg-card text-card-foreground border hover:bg-accent hover:text-accent-foreground',
                    'focus:ring-2 focus:ring-ring focus:ring-offset-2'
                );
        }
    };

    return (
        <Button
            variant={getButtonVariant()}
            onClick={() => onClick(value)}
            disabled={disabled}
            className={cn(getButtonClasses(), className)}
            aria-label={`Calculator button ${label}`}
        >
            {label}
        </Button>
    );
};
