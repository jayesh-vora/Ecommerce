import React from 'react';

import SHOP_DATA from '../../components/collection-preview/shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const {collections} = this.state;
    return (<div className="shop">
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
    )
  }
}

export default Shop;