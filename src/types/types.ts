export interface IItemWrapper {
    title: string,
    action: string,
    items: Array<Record<string, unknown>>,
    handler: () => void;
}
export interface IModal {
    inputs: IInputDetails[],
    closeModalHandler: () => void;
    buttonName: string,
    title:string,
    styles: Record<string, unknown>,
    storageKey: string,
    
}

export interface IInputDetails {  
        title:string,
        type: string,
        id: string,
        placeholder: string,
        index: number,
        styles: Record<string, unknown>,
        value: null
}
export type IBoard = {
    name: {value: string}
}