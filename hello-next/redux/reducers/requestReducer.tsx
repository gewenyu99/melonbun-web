const initState ={
    requestBuffer:[
        {id:'1', date:'24 November 2019', title:'Orange', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'2', date:'24 November 2019', title:'Papaya', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'3', date:'24 November 2019', title:'Durian', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'4', date:'24 November 2019', title:'Mango', description:'This project is', requesterUser:'Bar', fulfilled:true},
        {id:'5', date:'24 November 2019', title:'Apple', description:'This project is', requesterUser:'Bar', fulfilled:true},
        {id:'6', date:'24 November 2019', title:'Pear', description:'This project is', requesterUser:'Bar', fulfilled:true},
        {id:'7', date:'24 November 2019', title:'Melon', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'8', date:'24 November 2019', title:'Lemon', description:'This project is', requesterUser:'Bar', fulfilled:true},
        {id:'9', date:'24 November 2019', title:'Grape', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'10', date:'24 November 2019', title:'Watermelon', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'11', date:'24 November 2019', title:'Guava', description:'This project is', requesterUser:'Foo', fulfilled:true},
        {id:'12', date:'24 November 2019', title:'Pomegrate', description:'This project is', requesterUser:'Foo', fulfilled:true}
    ]
}

const requestReducer = (state = initState, action) => {

    let newState = {...state};
    switch(action.type) {

        case 'CREATE_REQUEST':
            newState.requestBuffer = [
                ...state.requestBuffer,
                {
                    ...action.newRequest,
                    id: action.newRequest.title.toLocaleLowerCase().replace(/ /g, '-'),
                    date: new Date().toISOString
                }
            ];
            break;

        case 'DELETE_REQUEST':
            newState.requestBuffer = state.requestBuffer.filter(request=>{
                return request.id !== action.id
            });
            break;

        default:
          // code block
      }
    return newState;
}

export default requestReducer