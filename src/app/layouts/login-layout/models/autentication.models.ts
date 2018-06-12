export class LoginModel {
    constructor(public email: string,
        public password: string,
        public rememberMe: boolean) { }
}

export class RegisterProfesorModel {
    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string,
        public nombres: string,
        public apellidos: string,
        public edad: number) { }
}
