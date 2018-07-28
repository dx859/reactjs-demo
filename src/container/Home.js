import React from 'react';
import styles from './home.less';
import { Button } from 'antd';

class Home extends React.Component {


    render() {
        return (
            <div>
            <Button type="primary">button</Button>
            <div className={styles.button}>home</div>
            </div>
        )
    }
}


export default Home;