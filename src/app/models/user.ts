export class User {
  userId: number;
  username: string;
  email: string;
  creationDate: string;
  isActive: boolean;

  constructor(
    userId: number,
    username: string,
    email: string,
    creationDate: string,
    isActive: boolean
  ) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.creationDate = creationDate;
    this.isActive = isActive;
  }
}

