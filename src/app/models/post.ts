export class Post {
    postId: number;
    userId: number;
    categoryId: number;
    title: string;
    content: string;
    viewCount: number;
    creationDate: string;
    isPublished: boolean;
  
    constructor(
      postId: number,
      userId: number,
      categoryId: number,
      title: string,
      content: string,
      viewCount: number,
      creationDate: string,
      isPublished: boolean
    ) {
      this.postId = postId;
      this.userId = userId;
      this.categoryId = categoryId;
      this.title = title;
      this.content = content;
      this.viewCount = viewCount;
      this.creationDate = creationDate;
      this.isPublished = isPublished;
    }
  }
  
