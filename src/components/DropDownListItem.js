import React,{Fragment} from 'react';
import DropDownItem from './DropDownItem';

const dropDownListItem = (props) => {

  const listItemToRender = props.listItem.map( (item, index) => <DropDownItem titleItem={item} />);

  return (
            <Fragment>
              {listItemToRender}
            </Fragment>
          );
}

export default dropDownListItem;
