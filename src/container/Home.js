import React from 'react';
import QuillEditor from "../components/RichEditor/QuillEditor";
import 'react-quill/dist/quill.snow.css';

class Home extends React.Component {


  render() {
    return (
      <div>
         <QuillEditor/>
      </div>
    )
  }
}


export default Home;