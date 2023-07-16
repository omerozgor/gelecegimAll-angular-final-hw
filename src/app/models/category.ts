export class Category {

    categoryId: number;
    name: string;
    creationDate: string;


    constructor(
        categoryId: number,
        name: string,
        creationDate: string,
    ) {
        this.categoryId = categoryId;
        this.name = name;
        this.creationDate = creationDate;

    }
}
