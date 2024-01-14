export interface Field {
    fieldName: string,
    fieldDisplay: string,
    overviewDisplay: boolean,
    detailDisplay: boolean,
    modifyDisplay: boolean,
    type: "text" | "datetime" | "dateday" | "image" | "textarea" | "boolean" | "select.MALE.FEMALE",
    choosen: Array<any> | null,
    viewDetail: JSX.Element | null
}
export interface InitField {
    fieldName: string,
    fieldValue: any
}

export interface Button {
    content: string,
    handleClick: Function
}

