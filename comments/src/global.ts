export interface CommentsByPostId {
    [postId: string]: { id: string; content: string }[];
}