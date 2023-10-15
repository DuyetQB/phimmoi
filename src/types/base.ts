export interface IButton {
  className?:string,
  style?:React.CSSProperties,
  children:React.ReactNode,

}
// export interface IBaseCard {
//   className?:string,
//   style?:React.CSSProperties,
//   src:React.ReactDOM
//   alt:string,
//   children:React.ReactNode,
// }
export interface IBaseCard {
data: any,
loading?:boolean
}


export interface FetchResult<T> {
  loading: boolean
  error?: React.ReactNode | unknown
  data?: T
}
