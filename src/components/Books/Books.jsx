import { Link } from 'react-router-dom';
import MenuComponent from '../menu.component';
import './books.css';

function Books() {
  return (
    <div className='wrapper'>
      <MenuComponent/>
      
      <div className="books">Books</div>
    </div>
  )
};

export default Books;