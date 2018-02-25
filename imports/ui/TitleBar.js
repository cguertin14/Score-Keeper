import React       from 'react';
import ReactDOM    from 'react-dom';
import PropTypes   from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }

  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2>{this.props.subtitle}</h2>;
    } else {
      return 
    }
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  //title: 'Default title'
};
