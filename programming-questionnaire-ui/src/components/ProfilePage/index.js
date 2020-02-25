import React from 'react';
import PieChart from 'components/common/PieChart';
import PageTemplate from 'components/templates/PageTemplate';

/**
 * Progile page for pie chart
 * @param {Array} categories - array of data for the chart
 */

const ProfilePage = ({ categories }) => {
  return (
    <PageTemplate>
      <PieChart categories={categories} />
    </PageTemplate>
  );
};

export default ProfilePage;
