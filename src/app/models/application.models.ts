import { IAutocompletable } from "../shared/models/shared.models";

export class Course {

    constructor(
        public id: number,
        public name: string,
        public description: string
    ) { }
}

export class CreateCourseModel {
    constructor(
        public nombre: string,
        public descripcion: string,
        public password: string,
        public confirmPassword: string,
        public desafioId: number) { }
}

class IChallengeInfo {
    constructor(
        public multipleSpriteEvents: boolean,
        public variableUse: boolean,
        public messageUse: boolean,
        public listUse: boolean,
        public nonUnusedBlocks: boolean,
        public userDefinedBlocks: boolean,
        public cloneUse: boolean,
        public secuenceUse: boolean,
        public multipleThreads: boolean,
        public twoGreenFlagThread: boolean,
        public advancedEventUse: boolean,
        public useSimpleBlocks: boolean,
        public useMediumBlocks: boolean,
        public useNestedControl: boolean,
        public basicInputUse: boolean,
        public nonCreatedVariableUse: boolean,
        public spriteSensisng: boolean,
        public basicOperators: boolean,
        public mediumOperators: boolean,
        public nestedOperators: boolean) { }
}

export class CreateChallengeModel extends IChallengeInfo {

    constructor(
        public nombre: string,
        public urlEscenarioInicial: string,
        public idSolucion: number,
        public urlSolucion: string,
        public dirArchivo: string,
        public descripcion: string,
        multipleSpriteEvents: boolean,
        variableUse: boolean,
        messageUse: boolean,
        listUse: boolean,
        nonUnusedBlocks: boolean,
        userDefinedBlocks: boolean,
        cloneUse: boolean,
        secuenceUse: boolean,
        multipleThreads: boolean,
        twoGreenFlagThread: boolean,
        advancedEventUse: boolean,
        useSimpleBlocks: boolean,
        useMediumBlocks: boolean,
        useNestedControl: boolean,
        basicInputUse: boolean,
        nonCreatedVariableUse: boolean,
        spriteSensisng: boolean,
        basicOperators: boolean,
        mediumOperators: boolean,
        nestedOperators: boolean) {
        super(
            multipleSpriteEvents,
            variableUse,
            messageUse,
            listUse,
            nonUnusedBlocks,
            userDefinedBlocks,
            cloneUse,
            secuenceUse,
            multipleThreads,
            twoGreenFlagThread,
            advancedEventUse,
            useSimpleBlocks,
            useMediumBlocks,
            useNestedControl,
            basicInputUse,
            nonCreatedVariableUse,
            spriteSensisng,
            basicOperators,
            mediumOperators,
            nestedOperators
        );
    }

    public mapInfo(info: ChallengeInfo) {
        this.multipleSpriteEvents = info.multipleSpriteEvents;
        this.variableUse = info.variableUse;
        this.messageUse = info.messageUse;
        this.listUse = info.listUse;
        this.nonUnusedBlocks = info.nonUnusedBlocks;
        this.userDefinedBlocks = info.userDefinedBlocks;
        this.cloneUse = info.cloneUse;
        this.secuenceUse = info.secuenceUse;
        this.multipleThreads = info.multipleThreads;
        this.twoGreenFlagThread = info.twoGreenFlagThread;
        this.advancedEventUse = info.advancedEventUse;
        this.useSimpleBlocks = info.useSimpleBlocks;
        this.useMediumBlocks = info.useMediumBlocks;
        this.useNestedControl = info.useNestedControl;
        this.basicInputUse = info.basicInputUse;
        this.nonCreatedVariableUse = info.nonCreatedVariableUse;
        this.spriteSensisng = info.spriteSensisng;
        this.basicOperators = info.basicOperators;
        this.mediumOperators = info.mediumOperators;
        this.nestedOperators = info.nestedOperators;
    }
}

export class ChallengeInfo extends IChallengeInfo {
    constructor(
        multipleSpriteEvents: boolean,
        variableUse: boolean,
        messageUse: boolean,
        listUse: boolean,
        nonUnusedBlocks: boolean,
        userDefinedBlocks: boolean,
        cloneUse: boolean,
        secuenceUse: boolean,
        multipleThreads: boolean,
        twoGreenFlagThread: boolean,
        advancedEventUse: boolean,
        useSimpleBlocks: boolean,
        useMediumBlocks: boolean,
        useNestedControl: boolean,
        basicInputUse: boolean,
        nonCreatedVariableUse: boolean,
        spriteSensisng: boolean,
        basicOperators: boolean,
        mediumOperators: boolean,
        nestedOperators: boolean) {
        super(multipleSpriteEvents,
            variableUse,
            messageUse,
            listUse,
            nonUnusedBlocks,
            userDefinedBlocks,
            cloneUse,
            secuenceUse,
            multipleThreads,
            twoGreenFlagThread,
            advancedEventUse,
            useSimpleBlocks,
            useMediumBlocks,
            useNestedControl,
            basicInputUse,
            nonCreatedVariableUse,
            spriteSensisng,
            basicOperators,
            mediumOperators,
            nestedOperators);
    }
}

export class AutocompleteChallengeModel implements IAutocompletable {

    public get AutocompleteId(): any {
        return this.id;
    }

    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public autor: string) { }
}
