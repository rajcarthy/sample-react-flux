const courses = [
    {
        id : 1,
        title : "Hitchickers Guide to the Galaxy",
        slug : "h2g2",
        authorId : 1,
        category : "Humor"
    },
    {
        id : 2,
        title : "War and Peace",
        slug : "war-and-peace",
        authorId: 2,
        category: "classic"
    }
]; 

const authors = [
    { id: 1, name : "Douglas Adams"},
    { id : 2, name : "Leo Tolstoy"}
];

const newCourse = {
    id: null,
    title: "",
    authorId : null,
    category: ""
};


module.exports = {
    newCourse,
    courses,
    authors
}
