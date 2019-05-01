export interface IFeedsChildrenData {
  created: number;
  id: string;
  permalink: string;
  selftext: string;
  author: string;
  title: string;
  score: number;
  num_comments: number;
  thumbnail: string;
}

export interface IFeedsChildren {
  kind: string;
  data: IFeedsChildrenData;
}

export interface IFeedsData {
  after: string | null;
  before: string | null;
  children: IFeedsChildren[];
  dist: number;
  modhash?: string;
}

export interface IFeeds {
  data: IFeedsData;
  kind: string;
}

export interface ICommentsReplies {
  data: {
    children: any;
  };
}
export interface ICommentsChildrenData {
  replies: ICommentsReplies;
  created: number;
  id: string;
  permalink: string;
  body: string;
  author: string;
  title: string;
  score: number;
  num_comments: number;
}
export interface ICommentsChildren {
  kind: string;
  data: ICommentsChildrenData;
}

export interface ICommentsData {
  after: string | null;
  before: string | null;
  children: ICommentsChildren[];
  dist: number;
  modhash?: string;
}
export interface IComments {
  data: ICommentsData;
  kind: string;
}
export type ISingleFeed = [IFeeds, IComments];
