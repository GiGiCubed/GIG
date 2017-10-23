import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Body, Text,
  Card, CardItem,
  H1, Content,
} from 'native-base';
import PropTypes from 'prop-types';

import Results from './Results';
import LinkToTesting from './LinkToTesting';
import MoreInformation from './MoreInformation';

class Radon extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }
  render() {
    return (
      <Content>
        <Content padder>
          <H1>Results for {this.props.zip}</H1>
          <Results level={this.props.level} />
          <LinkToTesting url='http://www.monksp.org' />
        </Content>
        <MoreInformation />
      </Content>
    );
  }
}

Radon.propTypes = {
  zip: PropTypes.string,
  level: PropTypes.number,
};

const mapStateToProps = state => ({
  zip: state.location.zip,
  level: state.radon.level,
});

export default connect(mapStateToProps)(Radon);