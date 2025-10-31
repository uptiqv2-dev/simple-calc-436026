import { cn } from '../../lib/utils';

interface DisplayProps {
    value: string;
    className?: string;
}

export const Display = ({ value, className }: DisplayProps) => {
    return (
        <div
            className={cn(
                'w-full p-6 bg-background border rounded-lg',
                'text-right text-4xl font-mono font-medium',
                'text-foreground select-none',
                'min-h-[80px] flex items-center justify-end',
                'overflow-hidden',
                className
            )}
            role='textbox'
            aria-readonly='true'
            aria-label={`Calculator display showing ${value}`}
        >
            <span className='truncate max-w-full'>{value}</span>
        </div>
    );
};
