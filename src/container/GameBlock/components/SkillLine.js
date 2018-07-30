import React from 'react';
import styles from './skillLine.css';

const skills = [
  '攻击',
  '英勇打击盾墙',
  '盾墙'
];

const SkillLine = () => {
  let arr = skills.concat(skills).concat(skills).concat(skills);
  let cellStyle = {
    width: 600 / 12,
    height: 600 / 12
  };
  return (
    <div className={styles.wrap}>
      {
        arr.map((skill, i) => <div style={cellStyle} className={styles.cell} key={i}>{skill}</div>)
      }
    </div>
  );
};

export default SkillLine;