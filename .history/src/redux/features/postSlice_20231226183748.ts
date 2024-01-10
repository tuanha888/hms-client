

export interface Post {
    id: string,
    title: string,
    content: string,
    cover: string,
    coverContent: string,
    summary: string,
    doctorId: string, 
    doctorName: string,
    categoryId: string,
    categoryName: string
}

const initValues : {
    posts: Post[],
    doctorPosts: Post[]
} = {
    posts: [],
    doctorPosts: []
}