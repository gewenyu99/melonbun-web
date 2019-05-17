import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { array, text, select } from '@storybook/addon-knobs';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';

import SPopupDialog, {PopupDialog} from '../components/Shared/Dialogs/PopupDialog';
import * as FormRenderHelper from '../components/Shared/Forms/FormRenderHelper';
import {FormType} from '../components/Shared/Forms/FormRenderHelper';

storiesOf('Dialog', module)
    .add('PopupDialog_Create', () => {

            //select knobs
            const label = 'Form Type';
            const options = FormType;
            const defaultValue = FormType.REQUEST;
            const groupId = 'FORM_GROUP';
            const formTypeVal = select(label, options, defaultValue, groupId);

            return (
                <Paper>
                    <PopupDialog 
                        onSubmit={action('Submit Form!')}
                        formType={formTypeVal}
                    >
                        <ListItemText primary="Create New Item" />
                    </PopupDialog>
                </Paper>
            )
        },
        { info: {
            text: 'Popup that renders a specific form',
            propTables: [PopupDialog],
            propTablesExclude: [SPopupDialog], // do not display propTable for HOC
        }}
    )
    .add('PopupDialog_Edit', () => {

            //select knobs
            const label = 'Form Type';
            const options = FormType;
            const defaultValue = FormType.REQUEST;
            const groupId = 'Form Type';
            const formTypeVal = select(label, options, defaultValue, groupId);
            
            const statusOptions = {
                "PENDING": "pending",
                "COMPLETED": "completed"
            };
            const testFormObj = {
                id: text('Id', '123'),
                name: text('Name', 'John Doe'),
                description: text('Description', 'A Request'),
                created_at: text('date1', 'sampleDate1'),
                created_by: text('date2', 'sampleDate2'),
                status: select('Status', statusOptions, "PENDING"),
                price:{ value: text('Price', '34'), currency: text('Currency', '$') },
                tags: array("Tags", ["tag1", "tag2"])
            };
            return (
                <Paper>
                    <PopupDialog 
                        onSubmit={action('Submit Form!')}
                        formType={formTypeVal}
                        initialFormObj={testFormObj}
                    >
                        <ListItemText primary="Edit This Item" />
                    </PopupDialog>
                </Paper>
            )
        },
        { info: {
            text: 'Popup that renders a specific form',
            propTables: [PopupDialog],
            propTablesExclude: [SPopupDialog], // do not display propTable for HOC
        }}
    )
    .add('Request Form', () => {
        
        //select knobs
        const label = 'Form Type';
        const options = FormType;
        const defaultValue = FormType.REQUEST;
        const groupId = 'FORM_GROUP';
        const formTypeVal = select(label, options, defaultValue, groupId);

        return (<Paper> {FormRenderHelper.RenderForm(formTypeVal, {onFormSubmit: action('Submit Form!')})} </Paper>);
    },
    { info: {
        text: 'Form Helper render prop function. Returns specific form based on the type specified.'
    }}
);