import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  PocketShareButton,
  PocketIcon
} from "react-share";

import React from "react";

const ArticleShare = ({ article, location }) => {
  return (
    <div className="has-text-centered">
      <div className="text-muted">Share this</div>
      <div className="buttons is-centered">
        <TwitterShareButton
          url={location.href}
          className="button"
          title={article.title}
          //   TODO: make dynamic
          via="nikhilgohil11"
          hashtags={article.tags}
        >
          <TwitterIcon size={48} round={true} />
        </TwitterShareButton>
        <PocketShareButton
          url={location.href}
          className="button"
          title={article.title}
        >
          <PocketIcon size={48} round={true} />
        </PocketShareButton>
        <EmailShareButton
          url={location.href}
          subject={article.title}
          body={article.excerpt}
          separator={`\n`}
          className="button"
        >
          <EmailIcon size={48} round={true} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ArticleShare;
