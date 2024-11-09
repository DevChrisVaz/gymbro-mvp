import React from 'react';
import { PromiseState, PromiseStateHandlerProps } from './types.d';

const PromiseStateHandler: React.FC<PromiseStateHandlerProps> = (props) => {
    switch (props.state) {
        case PromiseState.LOADING:
            return props.onLoading ?? props.onInitial;
        case PromiseState.SUCCESS:
            return props.onSuccess;
        case PromiseState.FAILED:
            return props.onFailed ?? props.onInitial;
        case PromiseState.ERROR:
            return props.onError ?? props.onInitial;
        default:
            return props.onInitial;
    }
}

export default PromiseStateHandler;