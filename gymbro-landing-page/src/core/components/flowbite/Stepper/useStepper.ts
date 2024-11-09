import { ReactElement, useState } from "react";

export function useStepper(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(currentState => {
            if (currentState >= steps.length - 1) return currentState;
            return currentState + 1;
        });
    }

    function prev() {
        setCurrentStepIndex(currentState => {
            if (currentState <= 0) return currentState;
            return currentState - 1;
        });
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        stepsNum: steps.length,
        step: steps[currentStepIndex],
        goTo,
        next,
        prev
    }
}