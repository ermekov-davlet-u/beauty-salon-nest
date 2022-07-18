

export interface IForSelect{
    value: number,
    label: string
  }


 export function makeObjForSelect(res: any[], id: string = "id", name: string = "name"):IForSelect[] {
    const newObj: IForSelect[] = []
    for(let i:number = 0; i < res.length; i++){
        newObj[i] = {
            value: res[i][id],
            label: res[i][name]
        }
    }
    return newObj
}