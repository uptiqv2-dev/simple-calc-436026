export type Operation = '+' | '-' | '*' | '/' | '=';

export type CalculatorState = 'idle' | 'entering' | 'operating' | 'result';

export interface CalculatorData {
    display: string;
    previousValue: number | null;
    operation: Operation | null;
    state: CalculatorState;
    waitingForOperand: boolean;
}

export type ButtonType = 'number' | 'operator' | 'special';

export interface CalculatorButtonConfig {
    label: string;
    value: string;
    type: ButtonType;
    className?: string;
}

export interface KeyboardMapping {
    [key: string]: string;
}
