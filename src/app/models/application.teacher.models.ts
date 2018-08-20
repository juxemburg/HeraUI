export class TeacherCourseModel {
    constructor(
        public id: number,
        public nombreCurso: string,
        public descripcionCurso: string,
        public passwordCurso: string,
        public desafioInicial: CourseChallengeModel,
        public estudiantes: Map<number, string>
    ) { }
}

export class CourseChallengeModel {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public dirDesafioInicial: string,
        public dirSolucion: string,
        public profesorId: string
    ) { }
}
