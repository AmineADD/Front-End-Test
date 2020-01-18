import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './styles.scss';

const Fullscreen = () => (
  <section className="page-fullscreen container-fluid">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <h2 className="article-title-style">Blank</h2>
      </div>
    </QueueAnim>

  </section>
);

export default Fullscreen;
