import { Middleware } from '@reduxjs/toolkit';
import browserHistory from '../browser-history/browser-history';
import { ActionTypes } from '../const';
import { reducer } from '../store/reducer';


type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionTypes.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
