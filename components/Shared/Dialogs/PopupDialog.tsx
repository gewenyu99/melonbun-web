import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as FormRenderHelper from '../Forms/FormRenderHelper';

const DialogStyle = (theme:any)=> ({
    
});

interface IProps {
    /** Initial values of the form object  */
    initialFormObj?: any;
    /** callback to create new Item. Pass form information */
    onSubmit: (newForm:any) => void;
    /** FormType constant from 'FormRenderHelper.tsx' that identifies type of form to be rendered */
    formType: string;
    /** Children component will be displayed as the clicakble area under a ListItem, that triggers the popup */
    children?: any;
}

interface IState {
    /** indicate if popup dialog is open */
    isDialogOpen: boolean;
}

export class PopupDialog extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
    }

    handleDialogToggle = ()=>{
        this.setState((prevState:IState)=> {
            return {isDialogOpen : !prevState.isDialogOpen};
        })
    }

    handleFormSubmit = newForm => {
        const {onSubmit} = this.props;
        this.handleDialogToggle();  //close dialog
        if(onSubmit){
            onSubmit(newForm);
        }
    }

    renderDialog = ()=>{
        const {isDialogOpen} = this.state;
        const {formType, initialFormObj} = this.props;
        
        return(
            <Dialog
                open={isDialogOpen}
                onClose={this.handleDialogToggle}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Post a New Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Content
                    </DialogContentText>
                    {FormRenderHelper.RenderForm(
                        formType, 
                        {
                            onFormSubmit: this.handleFormSubmit, 
                            initialFormObj
                        }
                    )}
                </DialogContent>
            </Dialog>
        );
    }

    render(){
        return (
            <>
                <ListItem button onClick={this.handleDialogToggle}>
                    {this.props.children}
                </ListItem>
                {this.renderDialog()}
            </>
        );
    }
}

export default withStyles(DialogStyle)(PopupDialog);
