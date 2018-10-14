export class OptionModel {
    constructor(public value: string,
        public text: string) { }
}

export class SingleValueModel {
    constructor(
        public data: number,
        public label: string,
        public name: string) { }
}

export class ChartInfoModel {
    constructor(
        public name: string,
        public description: string,
        public values: SingleValueModel[]
    ) { }
}

export class MultiChartInfoModel {
    constructor(
        public name: string,
        public labels: string[],
        public axisLabels: string[],
        public values: number[][]
    ) { }
}
