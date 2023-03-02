//export type IPopUpChanges = (id: string, title: string, changesTask: (id: string, changes: string) => void) => void;

export interface IPopUpChanges {
    id: string
    title: string
    setActivePopUp: (activePopUp: boolean) => void
    changesTask: (id: string, changes: string) => void
}
