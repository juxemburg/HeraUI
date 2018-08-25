export class ScratchGeneralResult {
    constructor(
        public id: number,
        public calificacionId: number,
        public general: boolean,
        public nombre: string,
        public numScripts: number,
        public numBloques: number,
        public duplicateScriptsCount: number,
        public deadCodeCount: number,
        public iInfoScratch_General: ScratchGeneralInfo
    ) { }
}

export class ScratchGeneralInfo {
    constructor(
        public id: number,
        public resultadoScratchId: number,
        public spriteCount: number,
        public eventsUse: boolean,
        public messageUse: boolean,
        public sharedVariables: boolean,
        public listUse: boolean,
        public nonUnusedBlocks: number,
        public userDefinedBlocks: number,
        public cloneUse: number,
        public secuenceUse: number,
        public multipleThreads: number,
        public twoGreenFlagTrhead: number,
        public advancedEventUse: number,
        public useSimpleBlocks: number,
        public useMediumBlocks: number,
        public useNestedControl: number,
        public basicInputUse: number,
        public variableUse: number,
        public spriteSensing: number,
        public variableCreation: number,
        public basicOperators: number,
        public mediumOperators: number,
        public advancedOperators: number
    ) { }
}

export class ScratchSpriteResult {
    constructor(
        public id: number,
        public calificacionId: number,
        public general: boolean,
        public nombre: string,
        public numScripts: number,
        public numBloques: number,
        public duplicateScriptsCount: number,
        public deadCodeCount: number,
        public iInfoScratch_Sprite: ScratchSpriteInfo
    ) { }
}

export class ScratchSpriteInfo {
    constructor(
        public id: number,
        public resultadoScratchId: number,
        public nonUnusedBlocks: boolean,
        public userDefinedBlocks: boolean,
        public cloneUse: boolean,
        public secuenceUse: boolean,
        public multipleThreads: boolean,
        public twoGreenFlagTrhead: boolean,
        public advancedEventUse: boolean,
        public useSimpleBlocks: boolean,
        public useMediumBlocks: boolean,
        public useNestedControl: boolean,
        public basicInputUse: boolean,
        public variableUse: boolean,
        public spriteSensing: boolean,
        public variableCreation: boolean,
        public basicOperators: boolean,
        public mediumOperators: boolean,
        public advancedOperators: boolean
    ) { }
}
