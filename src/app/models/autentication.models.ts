export class LoginModel {
    constructor(public email: string,
        public password: string,
        public rememberMe: boolean) { }
}

export class UserInfoModel {
    constructor(
        public username: string,
        public role: string,
        public userId: number,
        public userToken: string
    ) { }

    public map(): UserInfoViewModel {
        return new UserInfoViewModel(this.username,
            this.role, this.userId);
    }
}

export class UserInfoViewModel {
    constructor(
        public username: string,
        public role: string,
        public userId: number
    ) { }
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
