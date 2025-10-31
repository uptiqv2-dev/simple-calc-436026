import { CalculatorButton } from './CalculatorButton';
import { CALCULATOR_BUTTONS } from '../../utils/constants';

interface KeypadProps {
    onButtonClick: (value: string) => void;
}

export const Keypad = ({ onButtonClick }: KeypadProps) => {
    return (
        <div className='grid grid-cols-4 gap-3 w-full'>
            {CALCULATOR_BUTTONS.map((button, index) => (
                <CalculatorButton
                    key={`${button.value}-${index}`}
                    label={button.label}
                    value={button.value}
                    type={button.type}
                    onClick={onButtonClick}
                    className={button.className}
                />
            ))}
        </div>
    );
};
