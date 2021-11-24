import { Link } from 'react-router-dom';
const Thumb = ({ artist, children }) => {
  return (
    <div className='square bg img4'>
      <div className='content'>
        <div className='table'>
          <div className='table-cell'>
            <div className='link'>
              <Link to={`/music/artist/${artist.id}`} className='link'>
                {children}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumb;
