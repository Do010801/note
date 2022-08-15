import { createAction,props } from "@ngrx/store";



export const login = createAction("[auth] login");
export const loginSuccess = createAction("[auth] login Success", props<{idToken:string}>())
export const loginFailure = createAction("[auth] login Failure", props<{error : string}>());
export const logOut = createAction('[Auth] Logout');

