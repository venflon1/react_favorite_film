import React,{Fragment} from 'react';
import Movie from './Movie';
import MainTitleApp from './/MainTitleApp';

const mainTemplate = (props) => {

  return (
              <Fragment>
                <div class="container">
                  <MainTitleApp title="My favorite movies" />
                  {props.children}
                </div>
              </Fragment>
        );
}

export default mainTemplate;
