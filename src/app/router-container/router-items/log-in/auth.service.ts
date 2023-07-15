import { ErrorHandler, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";


export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new Subject<User>();
    isAuthenticated = false;
    token = null;



    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_fqisKxrD8L15-z_jhMX-1_gReIr1XEE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }))
    }


    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_fqisKxrD8L15-z_jhMX-1_gReIr1XEE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError), tap(resData => {

                this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            }))
    }


    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
    }


    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'AN UNKNOWS ERROR OCCURED'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'THIS EMAIL ALREADY EXISTS'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'THIS EMAIL DOES NOT EXIST'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'INVALID PASSWORD'
                break;
        }
        return throwError(errorMessage)
            ;
    }
}