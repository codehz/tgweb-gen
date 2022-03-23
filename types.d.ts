type ToUnderscore<T, K extends keyof T = keyof T> = {
  [K in keyof T]: { _: K } & T[K];
}[K];

export type Peer = {};

export type PhotoSize = {
  type?: string;
  w?: number;
  h?: number;
  size?: number;
  bytes?: string;
};

export type Photo = {
  _: "photo";
  id: string;
  access_hash: string | number;
  file_reference: string;
  sizes: PhotoSize[];
  dc_id: number;
};

type _DocumentAttribute = {
  documentAttributeImageSize: {
    w: number;
    h: number;
  };
  documentAttributeSticker: {
    alt: string;
  };
  documentAttributeVideo: {
    duration: number;
    w: number;
    h: number;
  };
  documentAttributeAudio: {
    duration: number;
    title?: string;
  };
  documentAttributeFilename: {
    file_name: string;
  };
};

export type DocumentAttribute<
  K extends keyof _DocumentAttribute = keyof _DocumentAttribute,
> = ToUnderscore<_DocumentAttribute, K>;

export type Document = {
  id: string;
  access_hash: string;
  file_reference: string;
  date: number;
  mime_type: string;
  size: number;
  dc_id: number;
  attributes: DocumentAttribute[];
};

export type _MessageMedia = {
  messageMediaPhoto: {
    photo: Photo;
  };
  messageMediaDocument: {
    document: Document;
  };
};

export type MessageMedia<K extends keyof _MessageMedia = keyof _MessageMedia> =
  ToUnderscore<_MessageMedia, K>;

export type ChatPhoto = {
  photo_id: string;
  dc_id: number;
};

export type UserProfilePhoto = {
  photo_id: string;
  dc_id: number;
};

export type NormalMessage = {
  _: "message";
  message: string;
  from_id?: Peer;
  date: number;
  views?: number;
  forwards?: number;
  edit_date?: number;
  post_author?: string;
  grouped_id?: string;
  media?: MessageMedia;
  entities: MessageEntity[];
};

export type InputUser = {
  user_id: string;
  access_hash: string;
};

export type MessageEntity = {
  _: string;
  offset: number;
  length: number;
  url?: string;
  user_id?: string | InputUser;
};

export type ServiceMessage = {
  _: "messageService";
  from_id?: Peer;
  date: number;
  action: MessageAction;
};

type _MessageAction = {
  messageActionChatCreate: { title: string };
  messageActionChatEditTitle: { title: string };
  messageActionHistoryClear: {};
};

export type MessageAction<
  K extends keyof _MessageAction = keyof _MessageAction,
> = ToUnderscore<_MessageAction, K>;

export type Message = NormalMessage | ServiceMessage;
