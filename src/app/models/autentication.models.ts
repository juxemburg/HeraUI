import { OptionModel } from './common.models';
import { inherits } from 'util';

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
        public token: string
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

class IUserData {
    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string,
        public nombres: string,
        public apellidos: string,
        public edad: number) { }
}


export class RegisterProfesorModel extends IUserData {
    constructor(
        email: string,
        password: string,
        confirmPassword: string,
        nombres: string,
        apellidos: string,
        edad: number) {
        super(email, password, confirmPassword, nombres, apellidos, edad);
    }
}

export class RegisterStudentModel extends IUserData {
    constructor(
        email: string,
        password: string,
        confirmPassword: string,
        nombres: string,
        apellidos: string,
        edad: number,
        public grado: number,
        public genero: number,
        public materiaFavorita: number,
        public actividadesPc: number,
        public frecuenciaPc: number,
        public manejoComputador: number,
        public conocimientoComputador: number,
        public usuarioScratch: string
    ) {
        super(email, password, confirmPassword, nombres, apellidos, edad);
    }
}

export class StudentRegistrationMetadata {
    constructor(
        public genderOptions: OptionModel[],
        public favoriteSubjectOptions: OptionModel[],
        public pcActivitiesOptions: OptionModel[],
        public pcFrecuencyOptions: OptionModel[]
    ) { }
}
