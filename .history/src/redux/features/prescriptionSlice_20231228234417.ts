

export interface Medicine {
    id: string,
    prescriptionId: string,
    name: string,
    quantity: number,
    breakfast: number,
    lunch: number,
    dinner: number,
    beforeBreakfast: boolean,
    beforeLunch: boolean,
    beforeDinner: boolean
}