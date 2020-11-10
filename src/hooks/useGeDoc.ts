import { IDocument } from "../types"

export function useGetDocObj(): <T extends IDocument>(arr: T[], object: T) => T | undefined {

    const getDocObj = <T extends IDocument>(arr: T[], object: T) => {
        const objectFound: T | undefined = arr.find(arrItem => arrItem.id === object.id)
        return objectFound
    }
    
    return getDocObj
}

export function useGetDocID(): (arr: string[], id: string) => string | undefined {

    const getDocID = (arr: string[], id: string) => {
        const idFound: string | undefined = arr.find(arrItem => arrItem === id)
        return idFound
    }
    return getDocID
}


