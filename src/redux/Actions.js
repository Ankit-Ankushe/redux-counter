import { INC_COUNT, DEC_COUNT} from "./ActionTypes"
export const incCount = () => {
    return{
        type: INC_COUNT
    }
}
export const decCount = () => {
    return {
        type: DEC_COUNT
    }
}