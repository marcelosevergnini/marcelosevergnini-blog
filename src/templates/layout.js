import React from 'react';
import 'prismjs/themes/prism.css';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import Footer from "../components/Footer";

class Template extends React.Component {
   constructor(props) {
    super(props);
   }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header isPagePost={this.props.isPagePost} config={userConfig} />
        {children}
        <Footer config={userConfig} />
      </div>
    );
  }
}

export default Template;
