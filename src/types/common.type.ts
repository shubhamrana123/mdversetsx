
import { cardsTypes } from "./enum";

export interface IConditionProps
{
    disease:Array<{id : number,name : string,className:any}>
}
export interface IProfileInfoProps
{
   profileInfo:Array<{id:number,profileInfoTitle:string,profileInfoDesc:string}> 
}
export interface ICardProps
{
    cardInfo:Array<any>,
    Heading : string,
    type : cardsTypes
}
export interface IDataTableProps
{
dataTable:Array<{id:number,columnData:any ,rowData:any}>
}
export interface INotesProps
{
    noteInfo:Array<{id : number,noteChatPics : string,noteChatTexts:string}>
}