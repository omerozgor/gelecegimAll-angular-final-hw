export class Comment {
    commentId: number;
    postId: number;
    userId: number;
    comment: string;
    creationDate: string;
    isConfirmed: boolean;

    constructor(

        commentId: number,
        postId: number,
        userId: number,
        comment: string,
        creationDate: string,
        isConfirmed: boolean
    ) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.comment = comment;
        this.creationDate = creationDate;
        this.isConfirmed = isConfirmed;
    }
}
