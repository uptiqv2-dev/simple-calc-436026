import { Card, CardContent } from '../ui/card';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { useCalculator } from '../../hooks/useCalculator';
import { useKeyboard } from '../../hooks/useKeyboard';

export const CalculatorContainer = () => {
    const { display, handleInput } = useCalculator();

    // Enable keyboard support
    useKeyboard({
        onKeyPress: handleInput,
        enabled: true
    });

    return (
        <div className='flex items-center justify-center min-h-screen p-4 bg-background'>
            <Card className='w-full max-w-sm mx-auto shadow-xl'>
                <CardContent className='p-6'>
                    <div className='space-y-4'>
                        <div className='text-center mb-4'>
                            <h1 className='text-2xl font-bold text-foreground'>Calculator</h1>
                            <p className='text-sm text-muted-foreground'>Use keyboard or buttons</p>
                        </div>

                        <Display value={display} />

                        <Keypad onButtonClick={handleInput} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
