import './movie.css';
import MenuComponent from '../menu.component';

function Movie() {
  return (
    <div className='wrapper'>
      <MenuComponent />
      <div className="movie">movie</div>
    </div>
    
  )
};

export default Movie;