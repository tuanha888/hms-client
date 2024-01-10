export interface Field {
    fieldName: string,
    fieldDisplay: string,
    overviewDisplay: boolean,
    detailDisplay: boolean,
    modifyDisplay: boolean,
    type: "text" | "datetime" | "dateday" | "image",
    choosen: Array<any> | null,
    viewDetail: any
}