import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './styles';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <Styles.PostItemLink to={slug}>
    <Styles.PostItemWrapper>
      <Styles.PostItemTag background={background}>
        {category}
      </Styles.PostItemTag>
      <Styles.PostItemInfo>
        <Styles.PostItemDate>
          {date} • {timeToRead} min de leitura
        </Styles.PostItemDate>
        <Styles.PostItemTitle>{title}</Styles.PostItemTitle>
        <Styles.PostItemDescription>{description}</Styles.PostItemDescription>
      </Styles.PostItemInfo>
    </Styles.PostItemWrapper>
  </Styles.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
