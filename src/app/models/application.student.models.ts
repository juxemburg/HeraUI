export class CalificacionesDesafioModel {
    constructor(
        public cursoId: number,
        public estudianteId: number,
        public desafioId: number,
        public nombre: string,
        public descripcion: string,
        public iniciada: boolean,
        public terminada: boolean,
        public urlEscenarioInicial: string,
        public calificaciones: CalificacionInfoModel[],
        public calificacionPendiente: CalificacionInfoModel) { }
}

export class CalificacionInfoModel {
    constructor(
        public id: number,
        public cursoId: number,
        public estudianteId: number,
        public desfioId: number,
        public tiempoInicio: Date,
        public tiempoFinal: Date,
        public dirArchivo: string,
        public duracion: string,
        public enCurso: boolean,
        public iniciada: boolean
    ) { }
}


export class CalificacionResultadoModel {
    constructor(
        public cursoId: number,
        public nombre: string,
        public resultadoId: number,
        public numScripts: number,
        public numBloques: number,
        public duplicateScriptCount: number,
        public deadCodeCount: number,
        public siguienteDesafioId: number
    ) { }
}
