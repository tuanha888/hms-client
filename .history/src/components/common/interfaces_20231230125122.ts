export interface Field {
    fieldName: string,
    overviewDisplay: boolean,
    detailDisplay: boolean,
    modifyDisplay: boolean,
    type: "text" | "date" | "image",
    choosen: string
}