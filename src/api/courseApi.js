import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError); 
}

export function getCourseBySlug(slug) {
    return fetch(baseUrl + "?slug=" +slug)
    .then(response => {
        if(!response.ok) throw new Error("Network reponse was not ok");
        return response.json().then(courses => {
            if (courses.length !== 1) throw new Error("Course not found:"+slug);
            return courses[0]; 
        });
    })
    .catch(handleError); 
}

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ""), {
        method: author.id ? "PUT" : "POST",
        headers:{ "content-type": "application/json" },
        body: JSON.stringify({
            ...course,
            authorId: parseInt(course.authorId, 10)
        })
        })
        .then(handleResponse)
        .catch(handleError); 
}

export function deleteAuthor(courseId){
    return fetch(baseUrl +courseId, { method : "DELETE"})
    .then(handleResponse)
    .catch(handleError); 
}