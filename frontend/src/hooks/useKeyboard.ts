import { useEffect } from 'react';
import { KEYBOARD_MAPPING } from '../utils/constants';

interface UseKeyboardProps {
    onKeyPress: (value: string) => void;
    enabled?: boolean;
}

export const useKeyboard = ({ onKeyPress, enabled = true }: UseKeyboardProps) => {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key;
            const mappedValue = KEYBOARD_MAPPING[key];

            if (mappedValue) {
                event.preventDefault();
                onKeyPress(mappedValue);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onKeyPress, enabled]);
};
