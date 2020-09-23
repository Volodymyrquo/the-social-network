import React from 'react';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const News = (props) => {
    return ( 
      <div>
        News
      </div>
    )
}
 
export default compose(withAuthRedirect)(News);