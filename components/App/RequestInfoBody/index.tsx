import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PopupDialog from '../../Shared/Dialogs/PopupDialog';
import {IRequestInfo} from '../../../redux/dataTypes/request'
import {FormType} from '../../Shared/Forms/FormRenderHelper';

interface IProps {
    /** Object of current request's object */
    requestObj: IRequestInfo;
    /** callback called when user updates a request */
    onItemUpdate: (id:any, newItem:any) => void;
}
const RequestInfoBody = (props: IProps) => {
    const {requestObj, onItemUpdate} = props;
    console.log("requestInfoBody ");
    console.log(requestObj);
    const updateItem = (form)=>{
        if(requestObj){
            onItemUpdate(requestObj.id, form);
        }
    }

    return (
        <>
            {requestObj && (
                <ul>
                    <li>ID: {requestObj.id}</li>
                    <li>Name: {requestObj.name}</li>
                    <li>Description: {requestObj.description}</li>
                    <li>Created_at: {requestObj.created_at}</li>
                    <li>Created_by: {requestObj.created_by}</li>
                    <li>Status: {requestObj.status}</li>
                    <li>Price(value,currency obj): {requestObj.price.value}</li>
                    <li>Tags(string array): {requestObj.tags}</li>
                </ul>
            )}
            {onItemUpdate && 
            (
                <List component="nav">
                    <PopupDialog 
                        onSubmit={updateItem}
                        formType={FormType.REQUEST}
                        initialFormObj={requestObj}
                    >
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit" />
                    </PopupDialog>
                </List>
            )}
        </>
            
    )
}

export default RequestInfoBody;
