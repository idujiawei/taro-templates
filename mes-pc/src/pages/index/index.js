import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Bread } from 'Bread';
import Form from './components/Form';
import Tool from './components/Tool';
import Table from './components/Table';
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
      <section>
        <Bread route={['<%= pageName %>']} />
        <Form />
        <Tool />
        <Tabs />
        <Table />
      </section>
    );
  }
}
export default <%= _.upperFirst(pageName) %>;
