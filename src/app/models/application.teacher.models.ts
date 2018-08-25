import { ScratchGeneralResult, ScratchSpriteResult } from '../hera-module/models/hera.models';

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


export class CourseStudentGradeModel {
    constructor(
        public cursoId: number,
        public estudianteId: number,
        public desafioId: number,
        public nombreDesafio: string,
        public iniciada: boolean,
        public terminada: boolean,
        public valorada: boolean,
        public calificaciones: CourseStudentGradeResultModel[]
    ) { }
}

export class CourseStudentGradeResultModel {
    constructor(
        public id: number,
        public cursoId: number,
        public estudianteId: number,
        public desafioId: number,
        public tiempoinicio: Date,
        public tiempoFinal: Date,
        public calificacionCualitativaId: number,
        public duracion: string,
        public enCurso: boolean,
        public resultadoGeneral: ScratchGeneralResult,
        public resultadoSprites: ScratchSpriteResult[]
    ) { }
}
