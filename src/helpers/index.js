// @flow
type Action = {
  type: string,
  payload?: any,
}

export type Reducer<S, A: Action> = (S, A) => S;

export type ReduxHandlers<S, A: Action> = {
  [key: string]: Reducer<S, A>,
}

export const createReducer =
  <S, A: Action>(initialState: S, handlers: ReduxHandlers<S, A>) =>
    (state: S = initialState, action: A) => (
      Object.prototype.hasOwnProperty.call(handlers, action.type) ?
        handlers[action.type](state, action) : state
    );

export const moveCaretAtTheEnd = (e: SyntheticEvent<HTMLInputElement>) => {
  if (e.target instanceof HTMLInputElement) {
    const { value } = e.target;
    e.target.value = '';
    e.target.value = value;
  }
};
