import Avatar from '@material-ui/core/Avatar';
import StyledCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
// tslint:disable-next-line
import * as React from 'react';

const styles = (theme: any) => ({
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    maxWidth: 400,
  },
  expand: {
    marginLeft: 'auto',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

interface ComponentProps {
    header: ComponentHeader;
    media: ComponentMedia;
}

interface ComponentMedia {
  image: string;
  title?: string;
}

interface ComponentHeader {
    userAbre?: string;
    title: string;
    date: string;
}

interface ComponentState {
    expanded?: boolean;
}

type Props = WithStyles<typeof styles> & ComponentProps;

class Card extends React.Component<Props, ComponentState> {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }));
  };

  render() {
    const {
      classes,
      header: { userAbre, date, title},
      media: { image, title: mediaTitle } } = this.props;

    const className =  [ classes.expand, ...(this.state.expanded ? [classes.expandOpen] : []) ];

    return (
      <div>
        <StyledCard className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label='Recipe' className={classes.avatar}>
                {userAbre}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={mediaTitle}
          />
          <CardContent>
            <Typography component='p'>
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='Share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={className.join(' ')}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph variant='body2'>
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </StyledCard>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
