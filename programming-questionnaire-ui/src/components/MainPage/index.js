import React, { useEffect } from 'react';
import Table from 'components/common/Table';
import PageTemplate from 'components/templates/PageTemplate';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

const MainPage = ({
  loadQuestionaries,
  selectQuestionary,
  questionaries,
  isRequesting,
  classes,
}) => {
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
