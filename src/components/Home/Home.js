import { Container, Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import * as loadApiServices from '../../services/loadApiServices';
import Thumb from '../Thumb';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadApiServices
      .getProducts()
      .then((response) => setProducts(response.results));
  }, []);
  console.log(products);
  return (
    <Container className='wrapper'>
      <h1>Find resources</h1>
      {products.map((artist) => {
        return (
          <Thumb key={artist.id} artist={artist}>
            {artist.title}
          </Thumb>
        );
      })}

      {loaded ? <Button>API</Button> : ' '}
    </Container>
  );
};

export default Home;
