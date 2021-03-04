import React from "react";
import { getBooks } from "../api/bookApi";
class BooksPage extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getBooks().then((books) => this.setState({ books: books }));
  }

  render() {
    return (
      <>
        <h2>Books</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => {
              return (
                <tr key={book.id}> 
                  <td>{book.title}</td>
                  <td>{book.authorId}</td>
                  <td>{book.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default BooksPage;
