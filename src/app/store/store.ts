import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { IRootState } from "./index";
import { rootReducer } from "./reducers";

export function configureStore(initialState?: IRootState): Store<IRootState> {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<IRootState>;

  return store;
}
