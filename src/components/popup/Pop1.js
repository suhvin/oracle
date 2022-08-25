import React from 'react';
import styles from "./Pop1.module.css";

const Pop1 = (props) => {
  // 그냥 누르면 close 작동하는 팝업

  const { title, state, close } = props;

  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={state ? 'openPopup popup' : 'popup'}>
      {state ? (
        <div id={styles.box}>
            <p className="content" id={styles.text1}>{title}</p>
            <p className="pop" id={styles.text2}>{props.children}</p>
            <button className="popCheck" id={styles.btn1} onClick={close}>확인</button>
        </div>
      ) : null}
    </div>
  );
};

export default Pop1;