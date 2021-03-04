import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/books/";

export function getBooks() {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError); 
}

export function getBookBySlug(slug) {
    return fetch(baseUrl + "?slug=" +slug)
    .then(response => {
        if(!response.ok) throw new Error("Network reponse was not ok");
        return response.json().then(books => {
            if (books.length !== 1) throw new Error("book not found:"+slug);
            return books[0]; 
        });
    })
    .catch(handleError); 
}

export function saveBook(book) {
    return fetch(baseUrl + (book.id || ""), {
        method: book.id ? "PUT" : "POST",
        headers:{ "content-type": "application/json" },
        body: JSON.stringify({
            ...book,
            authorId: parseInt(book.authorId, 10)
        })
        })
        .then(handleResponse)
        .catch(handleError); 
}

export function deleteAuthor(bookId){
    return fetch(baseUrl +bookId, { method : "DELETE"})
    .then(handleResponse)
    .catch(handleError); 
}