import { get, post } from './request'

export async function postCommentsQuery(params) {
  let comment = await post(`api/posts/${params.id}/comment`, params)

  return comment.data
}

export async function likeCommentQuery(params) {
  let comment = await post(`api/comment/${params.commentId}/like`)

  return comment.data
}

export async function dislikeCommentQuery(params) {
  let comment = await post(`api/comment/${params.commentId}/dislike`)

  return comment.data
}

export async function postDeleteCommentsQuery(params) {
  let comment = await post(`api/posts/${params.id}/comment/delete`, params)

  return comment.data
}

export async function getCommentsRequest(params) {
  let comments = await get(`api/posts/${params.id}/comments`, params)

  return comments.data
}