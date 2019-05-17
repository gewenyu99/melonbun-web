import * as RequestApi from '../api/requestApi';
import {IRequestForm} from '../dataTypes/request';

export function getAllRequests(){
    return RequestApi.getAll();
}

export function createNewRequest(requestForm:IRequestForm){
    //filter parameter before sending to api as string
    //const data = JSON.stringify(requestForm);
    return RequestApi.create({data:requestForm});
}

export function deleteRequest(id){
    return RequestApi.remove(id);
}

export function updateRequest(id:string, requestForm:IRequestForm){
    return RequestApi.update(id, {data:requestForm});
}

export function getRequest(id:string){
    return RequestApi.get(id);
}