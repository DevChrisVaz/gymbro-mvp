export enum PromiseState {
    INITIAL = "initial",
    LOADING = "loading",
    SUCCESS = "success",
    FAILED = "failed",
    ERROR = "error"
}

export type PromiseStateHandlerProps = {
    state: PromiseState,
    onInitial: ReactNode,
    onLoading?: ReactNode,
    onSuccess: ReactNode,
    onFailed?: ReactNode,
    onError?: ReactNode
}