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
    public siguienteDesafioId: number,
    public calificaciones: CalificacionInfoModel[],
    public calificacionPendiente: CalificacionInfoModel
  ) {}
}

export class CalificacionInfoModel {
  constructor(
    public id: number,
    public cursoId: number,
    public estudianteId: number,
    public desfioId: number,
    public puntuacion: number,
    public tiempoInicio: Date,
    public tiempoFinal: Date,
    public dirArchivo: string,
    public duracion: string,
    public enCurso: boolean,
    public iniciada: boolean
  ) {}
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
    public siguienteDesafioId: number,
    public assessmentType: number,
    public threadCount: number,
    public cloneCount: number,
    public cloneRemovalCount: number,
    public sequentialLoopsCount: number,
    public param1: number,
    public param2: number,
    public param3: number,
    public param4: number,
    public puntuacion: number
  ) {}
}

export class EstudianteDesafioResultadoViewModel {
  constructor(public nombreEstudiante: string, public puntuacion: number) {}
}
