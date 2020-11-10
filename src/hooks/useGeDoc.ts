import { IDocument } from "../types"

type GetDocObjFunc = <T extends IDocument>(arr: T[], object: T) => T | undefined
type GetDocObjIDFunc = <T extends IDocument>(arr: T[], id: string) => T | undefined
type GetDocIDFunc = (arr: string[], id: string) => string | undefined

export default function useGetDocObj(): {getDocObj: GetDocObjFunc , getDocObjID: GetDocObjIDFunc, getDocID: GetDocIDFunc} {

    const getDocObj = <T extends IDocument>(arr: T[], object: T) => {
        const objectFound: T | undefined = arr.find(arrItem => arrItem.id === object.id)
        return objectFound
    }

    const getDocObjID = <T extends IDocument>(arr: T[], id: string) => {
        const objectFound: T | undefined = arr.find(arrItem => arrItem.id === id)
        return objectFound
    }

    const getDocID = (arr: string[], id: string) => {
        const idFound: string | undefined = arr.find(arrItem => arrItem === id)
        return idFound
    }



    
    return {getDocObj, getDocObjID, getDocID }
}




