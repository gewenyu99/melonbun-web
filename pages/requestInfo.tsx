// pages/requestInfo.tsx
import RequestInfoBody from '../components/App/RequestInfoBody'
import {withRouter, SingletonRouter} from 'next/router'
import React, {Component} from 'react';
import Layout from '../components/App/Layout'
import {connect} from 'react-redux';
import {getRequest, updateRequest} from '../redux/actioncreators/RequestActions';
import CircularIndeterminate from '../components/Shared/ProgressIndicator/circularIndeterminate';

interface StateProps {
    favoriteRequests: string[];
    isFetching: boolean;
}
    
interface InjectedProps {
  router: {
    query:{
      title:string;
    }
  }
}

interface DispatchProps {
    getRequest: any;
    updateRequest: typeof updateRequest;
}

type Props = StateProps & DispatchProps & InjectedProps

interface IState {
  /** State of current request obj */
  requestObj: any;
}

export class RequestInfo extends Component<Props, IState>{
    
  constructor(props: Props) {
    super(props);
    this.state = {requestObj: null};
  }

    componentWillMount() {
        const {getRequest} = this.props;
        getRequest(this.props.router.query.title).then(data=>{
          console.log(data);
          this.setState(()=>{
            return {requestObj : data};
          })
        });
    }
    
    render(){
        const {requestObj} = this.state;
        const {updateRequest, isFetching} = this.props;
        return (
          <Layout>
            <CircularIndeterminate show={isFetching}/>
            <RequestInfoBody onItemUpdate={updateRequest} requestObj={requestObj}/>
          </Layout>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        favoriteRequests: state.profileReducer.favoriteRequests,
        isFetching: state.notificationReducer.isFetching
    }
}
const mapDispatchToProps = {
    getRequest,
    updateRequest
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestInfo));