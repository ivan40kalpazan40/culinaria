import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container } from 'semantic-ui-react';
import * as loadApiServices from '../../services/loadApiServices';

const Details = () => {
  const [artist, setArtist] = useState({});
  const params = useParams();
  useEffect(() => {
    loadApiServices.getArtist(params.id).then((res) => setArtist(res));
  }, []);
  console.log(artist);
  return (
    <Container>
      <h1>Artist Details</h1>
      <p>{artist.profile}</p>
    </Container>
  );
};

export default Details;
