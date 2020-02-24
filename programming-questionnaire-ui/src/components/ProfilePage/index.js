import React from 'react';
import PieChart from 'components/common/PieChart';
import PageTemplate from 'components/templates/PageTemplate';

const ProfilePage = ({ categories }) => {
  return (
    <PageTemplate>
      <PieChart categories={categories} />
    </PageTemplate>
  );
};

export default ProfilePage;
