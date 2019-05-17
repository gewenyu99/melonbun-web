import * as RequestServices from '../services/requestServices';
import {IRequestForm} from '../dataTypes/request';
import * as NotificationActions from '../actioncreators/notificationActions'

export const setRequestEntries = (requestList:any) => ({
    payload: {requestList},
    type: 'INITIALIZE_ALL_REQUESTS'
});

export function initializeRequestEntries() {

    return function (dispatch, getState) {

        dispatch(NotificationActions.fetching());
        return RequestServices.getAllRequests().then(
            data => {
                dispatch(setRequestEntries(data));
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to initialize requests - ", error);
        })
        .then(()=>{
            dispatch(NotificationActions.fetchingDone());
        });
    };
}

export function createNewRequest(requestForm:IRequestForm) {

    return function (dispatch, getState) {

        return RequestServices.createNewRequest(requestForm).then(
            data => {
                if(data) {
                    dispatch(initializeRequestEntries());
                    dispatch(NotificationActions.toastMessage("Request Created"))
                }
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to create request - ", error);
        });
    };
}

export function updateRequest(id:string, requestForm:IRequestForm) {

    return function (dispatch, getState) {

        return RequestServices.updateRequest(id, requestForm).then(
            data => {
                if(data) {
                    dispatch(initializeRequestEntries());
                    dispatch(NotificationActions.toastMessage("Request Updated. Please refresh page to view changes."))
                }
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to update request - ", error);
        });
    };
}

export function deleteRequest(id:string) {

    return function (dispatch, getState) {

        return RequestServices.deleteRequest(id).then(
            data => {
                if(data) {
                    dispatch(initializeRequestEntries());
                    dispatch(NotificationActions.toastMessage("Request Deleted"))
                }
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to delete request - ", error);
        });
    };
}

export function getRequest(id:string) {
    
    return function (dispatch, getState) {

        dispatch(NotificationActions.fetching());
        return RequestServices.getRequest(id)
        .then((data)=>{
            dispatch(NotificationActions.fetchingDone());
            return data;
        })
        .catch(function(error) {
            console.log("Error: Failed to get request - ", error);
        });
    };
}