import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import * as loadApiServices from '../../services/loadApiServices';

const Details = () => {
  const [artist, setArtist] = useState({});
  const params = useParams();
  const [artistId, setArtistId] = useState(params.id);

  useEffect(() => {
    console.log(params);
    setArtist(params.id);
    loadApiServices.getArtist(artistId).then((res) => setArtist(res));
  }, [artistId]);

  console.log(artist);
  const clickLink = (e) => {
    e.preventDefault();
    let newParam = e.target.pathname.split('/music/artist/')[1];
    setArtistId(newParam);
  };

  const groupTemplate = (
    <Grid.Row>
      <Grid.Column width={4}>Groups:</Grid.Column>
      <Grid.Column width={12}>
        {artist.groups?.map((group) => (
          <>
            {/* Check this out */}
            <Link
              className='group-link'
              to={`/music/artist/${group.id}`}
              key={group.id}
              onClick={clickLink}
            >
              {group.name}
            </Link>
          </>
        ))}
      </Grid.Column>
    </Grid.Row>
  );

  const membersTemplate = (
    <Grid.Row>
      <Grid.Column width={4}>Members:</Grid.Column>
      <Grid.Column width={12}>
        {artist.members?.map((member) => (
          <>
            {/* Check this out */}
            <Link
              className='group-link'
              to={`/music/artist/${member.id}`}
              key={member.id}
              onClick={clickLink}
            >
              {member.name}
            </Link>
          </>
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
