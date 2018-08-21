import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import './{{template}}.styl';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class {{template}} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillReceiveProps(nextProps) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) { }

  componentDidUpdate(prevProps, prevState) { }

  componentWillUnmount() { }


  render() {
    return (
      <div className="{{template}}">

      </div>
    );
  }
}

{{template}}.propTypes={
  
}

{{template}}.defaultProps={

}

