import { CalculatorData, Operation } from '../types/calculator';

export const performOperation = (firstOperand: number, secondOperand: number, operation: Operation): number => {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand === 0) {
                throw new Error('Division by zero');
            }
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
};

export const formatNumber = (num: number): string => {
    if (num === 0) return '0';

    // Handle very large numbers with scientific notation
    if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
    }

    // Format with appropriate decimal places
    const formatted = num.toString();

    // Limit decimal places to prevent overflow
    if (formatted.includes('.') && formatted.length > 12) {
        return parseFloat(num.toPrecision(10)).toString();
    }

    return formatted;
};

export const validateInput = (input: string, currentDisplay: string): boolean => {
    // Prevent multiple decimal points
    if (input === '.' && currentDisplay.includes('.')) {
        return false;
    }

    // Prevent display overflow
    if (currentDisplay.length >= 12 && input !== 'clear' && input !== 'backspace') {
        return false;
    }

    return true;
};

export const handleBackspace = (display: string): string => {
    if (display.length <= 1) {
        return '0';
    }
    return display.slice(0, -1);
};

export const isOperator = (value: string): value is Operation => {
    return ['+', '-', '*', '/', '='].includes(value);
};

export const calculateResult = (calculatorData: CalculatorData): CalculatorData => {
    const { display, previousValue, operation } = calculatorData;

    if (previousValue === null || !operation || operation === '=') {
        return calculatorData;
    }

    try {
        const current = parseFloat(display);
        const result = performOperation(previousValue, current, operation);

        return {
            display: formatNumber(result),
            previousValue: null,
            operation: null,
            state: 'result',
            waitingForOperand: false
        };
    } catch {
        return {
            display: 'Error',
            previousValue: null,
            operation: null,
            state: 'idle',
            waitingForOperand: false
        };
    }
};
