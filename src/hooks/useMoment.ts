import moment from 'moment'
import momentTZ from "moment-timezone";
import "moment/locale/fr-ca";


const getDateByTimeZone = (timeToUpdate: string): string => {
    const rightTime: string = momentTZ.tz(timeToUpdate, "Europe/Paris").format(); //Convert the date returned by mongoDB to the local time of Paris
    return rightTime
}

export default function useMoment(): (date: string) => string {
    return (date) => moment(getDateByTimeZone(date)).format("L")
}

export function useDiff(): (beginDate: string, endDate: string) => number {
    return (beginDate, endDate) => {
        const momentBegin = moment(getDateByTimeZone(beginDate))
        const momentEnd = moment(getDateByTimeZone(endDate))
        return momentEnd.diff(momentBegin)
    }
}
