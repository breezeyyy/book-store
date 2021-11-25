import React from 'react';
import Header from "../../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header
          isHome
          hasTabs
          tabs={[
            {name: '男生', to: '/home'},
            {name: '女生', to: '/home/female'}
          ]}
        />
      </div>
    );
  }
};
