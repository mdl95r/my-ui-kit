export interface IUser {
  firstName: string,
  lastName: string,
  image: string,
}

interface ILinkItem {
  tag: string,
  config: Object
}

export interface IAvatarLinks {
  unauthorized: ILinkItem,
  authorized: ILinkItem
}