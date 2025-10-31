import { useState, useCallback } from 'react';
import { CalculatorData } from '../types/calculator';
import { isOperator, validateInput, handleBackspace, calculateResult } from '../utils/calculator';

const initialState: CalculatorData = {
    display: '0',
    previousValue: null,
    operation: null,
    state: 'idle',
    waitingForOperand: false
};

export const useCalculator = () => {
    const [calculatorData, setCalculatorData] = useState<CalculatorData>(initialState);

    const handleInput = useCallback((value: string) => {
        setCalculatorData(prev => {
            // Handle clear
            if (value === 'clear') {
                return initialState;
            }

            // Handle backspace
            if (value === 'backspace') {
                if (prev.state === 'result') {
                    return initialState;
                }
                return {
                    ...prev,
                    display: handleBackspace(prev.display)
                };
            }

            // Handle numbers and decimal point
            if (!isOperator(value) && value !== '=') {
                if (!validateInput(value, prev.display)) {
                    return prev;
                }

                if (prev.waitingForOperand || prev.display === '0' || prev.state === 'result') {
                    return {
                        ...prev,
                        display: value === '.' ? '0.' : value,
                        state: 'entering',
                        waitingForOperand: false
                    };
                }

                return {
                    ...prev,
                    display: prev.display + value,
                    state: 'entering'
                };
            }

            // Handle operators
            if (isOperator(value)) {
                const current = parseFloat(prev.display);

                if (value === '=') {
                    return calculateResult(prev);
                }

                if (prev.operation === null) {
                    return {
                        ...prev,
                        previousValue: current,
                        operation: value,
                        state: 'operating',
                        waitingForOperand: true
                    };
                }

                // Chain operations
                if (prev.previousValue !== null && !prev.waitingForOperand) {
                    const result = calculateResult(prev);

                    if (result.display === 'Error') {
                        return result;
                    }

                    return {
                        ...result,
                        previousValue: parseFloat(result.display),
                        operation: value,
                        state: 'operating',
                        waitingForOperand: true
                    };
                }

                return {
                    ...prev,
                    operation: value,
                    state: 'operating',
                    waitingForOperand: true
                };
            }

            return prev;
        });
    }, []);

    const reset = useCallback(() => {
        setCalculatorData(initialState);
    }, []);

    return {
        display: calculatorData.display,
        handleInput,
        reset
    };
};
