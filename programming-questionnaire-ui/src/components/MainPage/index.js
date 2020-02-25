import React, { useEffect } from 'react';
import Table from 'components/common/Table';
import PageTemplate from 'components/templates/PageTemplate';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

/**
 * Main page with table of list of questionaries
 * @param {Function} loadQuestionaries - function which dispatch action for the fetching data from the API
 * @param {Function} selectQuestionary - function which dispatch action for the selecting current questionary
 * @param {Array} questionaries - array of questionaries from the API
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
