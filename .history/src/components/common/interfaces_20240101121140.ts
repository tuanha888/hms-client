export interface Field {
    fieldName: string,
    fieldDisplay: string,
    overviewDisplay: boolean,
    detailDisplay: boolean,
    modifyDisplay: boolean,
    type: "text" | "datetime" | "dateday" | "image" | "textarea",
    choosen: Array<any> | null,
    // viewDetail: any
}
export interface InitField {
    fieldName: string,
    fieldValue: any
}