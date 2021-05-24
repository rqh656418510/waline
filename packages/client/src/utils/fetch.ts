import type { Comment, CommentData } from '../typings';

export interface FetchCountOptions {
  serverURL: string;
  paths: string[];
}

export const fetchCommentCount = ({
  serverURL,
  paths,
}: FetchCountOptions): Promise<number | number[]> =>
  fetch(
    `${serverURL}/comment?type=count&url=${encodeURIComponent(paths.join(','))}`
  ).then((resp) => resp.json() as Promise<number | number[]>);

export interface FetchRecentOptions {
  serverURL: string;
  count: number;
}

export const fetchRecentComment = ({
  serverURL,
  count,
}: FetchRecentOptions): Promise<Comment[]> => {
  const url = `${serverURL}/comment?type=recent&count=${count}`;
  return fetch(url).then((resp) => resp.json() as Promise<Comment[]>);
};

export interface FetchListOptions {
  serverURL: string;
  path: string;
  page: number;
  pageSize: number;
}

export interface FetchListResult {
  count: number;
  data: Comment[];
  totalPages: number;
}

export const fetchCommentList = ({
  serverURL,
  path,
  page,
  pageSize,
}: FetchListOptions): Promise<FetchListResult> => {
  const url = `${serverURL}/comment?path=${encodeURIComponent(
    path
  )}&pageSize=${pageSize}&page=${page}`;

  return fetch(url).then((resp) => resp.json() as Promise<FetchListResult>);
};

export interface PostCommentOptions {
  serverURL: string;
  lang: string;
  token?: string;
  comment: CommentData;
}

export interface PostCommentResponse {
  data: unknown;
  errmsg?: string;
}

export const postComment = ({
  serverURL,
  lang,
  token,
  comment,
}: PostCommentOptions): Promise<PostCommentResponse> => {
  const url = `${serverURL}/comment?lang=${lang}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment),
  }).then((resp) => resp.json() as Promise<PostCommentResponse>);
};
