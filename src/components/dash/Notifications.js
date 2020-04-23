import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Notifications = ({ notifications, full }) => {

  // show only 4 notifications if not full
  if (!full) {
    notifications = notifications && notifications.slice(0, 4);
  }

  return (
    <div className="notifications uk-container uk-container-large uk-padding">
      {
        notifications && notifications.map(notification => {
          const content = () => {
            // returns notification body based on type of content
            if (notification.content === 'sign up') return <p> <Link to={`/profile/${notification.userId}`} className="uk-link-heading uk-text-bold"> {notification.user} </Link> joined us. </p>;
            else if (notification.content === 'new project') return <p> <Link to={`/profile/${notification.userId}`} className="uk-link-heading uk-text-bold"> {notification.user} </Link> added a new <Link to={`/project/${notification.projectId}`} className="uk-link-heading uk-text-bold"> project. </Link> </p>;
          }
          return (
            <div key={notification.id} className="uk-card uk-card-default uk-width-1-1 uk-margin-bottom">
              <div className="uk-card-body">
                {/* calling the function to generate the body => */} {content()}
                <p className="uk-text-meta uk-margin-remove-top uk-display-inline-block"><time dateTime={notification.time.toDate()}>{moment(notification.time.toDate()).fromNow()}</time></p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Notifications;