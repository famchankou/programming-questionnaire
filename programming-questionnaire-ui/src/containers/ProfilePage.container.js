import { connect } from 'react-redux';
import ProfilePageComponent from 'components/ProfilePage';
import withErrorMessage from 'components/HOCs/withError';

const mapStateToProps = state => ({
  categories: state.questionaries?.data.map(item => item.name),
});

export default withErrorMessage('profile')(
  connect(mapStateToProps, null)(ProfilePageComponent)
);
