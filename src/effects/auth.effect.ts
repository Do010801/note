import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import * as AuthActions from "../actions/auth.actions";
import { of } from "rxjs"



@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService) { }
    authEffecr$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.login),
        switchMap(() => this.authService.login()),
        map(idToken => AuthActions.loginSuccess({ idToken: idToken })),
        catchError(error => of(AuthActions.loginFailure({ error: error })))
    ))
}