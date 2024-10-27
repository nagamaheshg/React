import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Books from './books';
import Book from './Book';
function BookList() {
	return (
		<section className='booklist'>
			{Books.map((book) => (
				<Book {...book} key={book.id} />
			))}
		</section>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
