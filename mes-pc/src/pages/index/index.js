import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Bread } from 'Bread';
import Form from './components/Form';
import Tool from './components/Tool';
import Table from './components/Table';
import pageConfig from './page.config';
import { mapDispatchToProps } from './redux/mapDispatchToProps';

@connect(
  state => ({ ...state.<%= pageName %>, }), mapDispatchToProps )
class <%= _.upperFirst(pageName) %> extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.update({
      searchResult: [],
      searchParams: {},
    });
  }

  render() {
    return (
      <Fragment>
        <Bread route={[pageConfig.title]} />
        <Form />
        <Tool />
        <Table />
      </Fragment>
    );
  }
}
export default <%= _.upperFirst(pageName) %>;
