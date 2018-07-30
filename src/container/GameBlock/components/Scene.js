import React, {Component} from 'react';
import styles from './scene.css';
import SkillLine from "./SkillLine";
import StatusBar from "./StatusBar";


class Scene extends Component {
  render() {
    return (
      <div className={styles.scene}>
        <div className={styles.block}>
          <div className={styles.enemy}>
            <StatusBar/>
          </div>
          <div className={styles.hero}>
            <StatusBar/>
          </div>
        </div>
        <SkillLine/>
      </div>
    );
  }
}

export default Scene;