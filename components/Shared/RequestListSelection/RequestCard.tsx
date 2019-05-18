import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import ShareIcon  from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import Icon from '@material-ui/core/Icon';
import SelectableCard from '../Selectable/selectableCard';

const cardStyle = (theme:any)=> ({
    card: {
        maxWidth: 400,
    },
    actions:{
        display: 'flex',
    },
    status: {
        marginLeft: 'auto',
    },
    image: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

interface IProps{
    request: IRequestInfo
    classes: {
        status: string;
        image: string;
        card:string;
        actions: string;
    }
    /** indicate if this request is in user's favorites */
    isFavorite: boolean;
    /** callback called when user adds a favorite request */
    onAddFavoriteRequest: (requestId:string) => void;
    /** callback called when user removes a favorite request */
    onRemoveFavoriteRequest: (requestId:string) => void;
    /** indicate if this card is selected */
    active: boolean;
    /** callback to pass selected card ref back when item selected */
    onItemSelect: (ref:React.RefObject<HTMLButtonElement>) => void;
}

export const RequestCard = (props: IProps) => {
    const {
        classes = defaultProps.classes, 
        isFavorite, 
        onAddFavoriteRequest,
        onRemoveFavoriteRequest, 
        onItemSelect, 
        active,
        request:{id, name, description, created_at, created_by, status, price, tags}
    } = props;
    
    const toggleFavorite = () =>{
        if(isFavorite){
            onRemoveFavoriteRequest(id);
        }else{
            onAddFavoriteRequest(id);
        }
    }
    
    return(
        <Card className={classes.card}>
            <SelectableCard onCardSelect={onItemSelect} id={id} active={active}>
                <>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe">
                            {created_by}
                            </Avatar>
                        }
                        title={name}
                        subheader={created_at}
                    />
                    <CardMedia
                        className={classes.image}
                        image="/static/images/cards/apple.jpg"
                        title="Apple"
                    />
                    <CardContent>
                        <Typography variant="body1" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </>
            </SelectableCard>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton
                    color="inherit" 
                    aria-label="Open drawer"
                    onClick={toggleFavorite}
                >
                    <Icon>{isFavorite?"favorite": "favorite_border"}</Icon>
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <Typography className={classes.status} variant="subtitle2" component="p">
                    {status}
                </Typography>
            </CardActions>     
        </Card>
    )
}

const defaultProps = {
    classes: {
        status: '',
        image: '',
        card:'',
        actions: '',
    }
};

export default withStyles(cardStyle)(RequestCard);