import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {handleAwsRes} from '../store/upload.js';
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: null,
      gameName: null,
      boardGameName: null,
    }
  }
  multipleFileChangedHandler = (event) => {
    this.setState({
     selectedFiles: event.target.files
    });
  };
  multipleFileUploadHandler = (props) => {
    const packageSent = []
    const data = new FormData();
    data.set('Board Game Name', `${this.state.boardGameName}`)
  let selectedFiles = this.state.selectedFiles;
    if ( selectedFiles ) {
     for ( let i = 0; i < selectedFiles.length; i++ ) {
      data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
     }
     packageSent.push(data, this.state.boardGameName, this.state.gameName)
  axios.post( 'https://gamenyte-server.herokuapp.com/api/profile/profile-img-upload', packageSent[0], {
      headers: {
       'accept': 'application/json',
       'Accept-Language': 'en-US,en;q=0.8',
       'Content-Type': `multipart/form-data; boundary=${packageSent[0]._boundary}`,
      }
     })
      .then( ( response ) => {
      if ( 200 === response.status ) {
        if( response.data.error ) {
         if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
          alert( 'Max size: 2MB', 'red' );
         } else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
          alert( 'Max 4 images allowed', 'red' );
         } else {
          alert( response.data.error, 'red' );
         }
        } else {
         let fileName = response.data;
         alert( 'File Uploaded', '#3089cf' );
         this.props.handleAwsRes(fileName.locationArray[0])
  }
       }
      })
      .catch( ( error ) => {
      alert( error, 'red' );
     });
    } else {
     alert( 'Please upload file', 'red' );
    }
  };
  render() {
    return(
     <div>
      <div className="container">
       <div className="card border-light mb-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
        <div className="card-header">
         <h3 style={{ color: '#555', marginLeft: '12px' }}>Upload Multiple Images</h3>
         <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 400px x 400px ( Max 2MB )</p>
        </div>
        <div className="card-body">
         <p className="card-text">Please upload the Gallery Images for your gallery</p>
         <input type="file" multiple onChange={this.multipleFileChangedHandler}/>
         <div className="mt-5">
          <button className="btn btn-info" onClick={this.multipleFileUploadHandler}>Upload!</button>
         </div>
        </div>
       </div>
  </div>
     </div>
    );
   }
  }
  const mapStateToProps = null;
  const mapDispatchToProps = {handleAwsRes};
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Upload);
