import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionPageContainer = lazy(() =>
  import('../collection/CollectionContainer')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionsOverviewContainer')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Suspense fallback={WithSpinner}>
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
