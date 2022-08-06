/* GlobalStore */
export interface GlobalState {
  token: string;
  userInfo: any;
}

/* AuthState */
export interface AuthState {
  authButtons: {
    [propName: string]: any;
  };
  authRouter: string[];
}
