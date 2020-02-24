import React, { useEffect } from 'react';
import Table from 'components/common/Table';
import PageTemplate from 'components/templates/PageTemplate';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

/**
 * Main page with table of list of questionaries
 * @param {Function} loadQuestionaries
 * @param {Function} selectQuestionary
 * @param {Array} questionaries
 */

const MainPage = ({ loadQuestionaries, selectQuestionary, questionaries }) => {
  useEffect(() => {
    loadQuestionaries();
  }, [loadQuestionaries]);

  return (
    <PageTemplate>
      <Table data={questionaries} selectQuestionary={selectQuestionary} />
    </PageTemplate>
  );
};

export default withStyles(styles)(MainPage);
