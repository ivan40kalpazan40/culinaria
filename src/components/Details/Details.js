import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import * as loadApiServices from '../../services/loadApiServices';

const Details = () => {
  const [artist, setArtist] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(params);
    loadApiServices.getArtist(params.id).then((res) => setArtist(res));
  }, []);
  console.log(artist);
  const groupTemplate = (
    <Grid.Row>
      <Grid.Column width={4}>Groups:</Grid.Column>
      <Grid.Column width={12}>
        <p>{}</p>
      </Grid.Column>
    </Grid.Row>
  );

  const membersTemplate = (
    <Grid.Row>
      <Grid.Column width={4}>Members:</Grid.Column>
      <Grid.Column width={12}>
        {artist.members?.map((member) => (
          <li>
              {/* Check this out */}
            <Link
              to={`/music/artist/${member.id}`}
              onClick={() => setArtist({})}
            >
              {member.name}
            </Link>
          </li>
        ))}
      </Grid.Column>
    </Grid.Row>
  );
  const template = artist.groups
    ? groupTemplate
    : artist.members
    ? membersTemplate
    : '';
  return (
    <Container>
      <h1>{artist.name}</h1>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>Bio:</Grid.Column>
          <Grid.Column width={12}>
            <p>{artist.profile}</p>
          </Grid.Column>
        </Grid.Row>
        {template}
      </Grid>
    </Container>
  );
};

export default Details;
