import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';

const ConfirmEmail = () => (
  <div className="body-inner">
    <div className="card card-white">
      <div className="card-content">
        <div className="logo text-center">
          <a href={DEMO.link}>Confirm Email</a>
        </div>

        <div>
          <p className="confirm-mail-icon"><span className="material-icons">mail_outline</span></p>
          <p className="text-center text-small m-0">
            An email has been send to <strong>username@mail.com</strong>. Please check for an email from us and click on the included link to reset your password.
         </p>
        </div>

      </div>
    </div>
    <div className="additional-info">
      <span>Return to <a href={DEMO.login}>Login</a></span>
    </div>
  </div>
);

const Page = () => (
  <div className="page-auth page-confirm-email">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <ConfirmEmail />
        </div>
      </QueueAnim>
    </div>
  </div>
);

export default Page;

