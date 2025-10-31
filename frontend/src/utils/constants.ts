import { CalculatorButtonConfig, KeyboardMapping } from '../types/calculator';

export const CALCULATOR_BUTTONS: CalculatorButtonConfig[] = [
    // Row 1
    { label: 'C', value: 'clear', type: 'special', className: 'col-span-2' },
    { label: '⌫', value: 'backspace', type: 'special' },
    { label: '÷', value: '/', type: 'operator' },

    // Row 2
    { label: '7', value: '7', type: 'number' },
    { label: '8', value: '8', type: 'number' },
    { label: '9', value: '9', type: 'number' },
    { label: '×', value: '*', type: 'operator' },

    // Row 3
    { label: '4', value: '4', type: 'number' },
    { label: '5', value: '5', type: 'number' },
    { label: '6', value: '6', type: 'number' },
    { label: '−', value: '-', type: 'operator' },

    // Row 4
    { label: '1', value: '1', type: 'number' },
    { label: '2', value: '2', type: 'number' },
    { label: '3', value: '3', type: 'number' },
    { label: '+', value: '+', type: 'operator' },

    // Row 5
    { label: '0', value: '0', type: 'number', className: 'col-span-2' },
    { label: '.', value: '.', type: 'number' },
    { label: '=', value: '=', type: 'operator' }
];

export const KEYBOARD_MAPPING: KeyboardMapping = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '.': '.',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    'Enter': '=',
    '=': '=',
    'Escape': 'clear',
    'Backspace': 'backspace'
};
