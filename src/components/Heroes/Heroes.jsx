import './heroes.css';
import MenuComponent from '../menu.component';

function Heroes() {
  return (
    <div className='wrapper'>
      <MenuComponent/>
      <div className="heroes">heroes</div>
    </div>
  )
};

export default Heroes;