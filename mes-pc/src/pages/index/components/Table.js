import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { CommonTable } from "Common";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";

@connect(
  (state) => ({ ...state.<%= pageName %>, userLoation: state.userLoation }),
  mapDispatchToProps
)
class <%= _.upperFirst(pageName) %>Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [];
  }

  componentDidMount() {
    this.getData();
  }

   componentDidUpdate(preProps) {
    if (preProps.userLoation !== this.props.userLoation) {
      this.getData();
    }
  }

  getData = ({ page = 1, size = this.props.size } = {}) => {
    const { handleGetList, searchParams, tabActiveKey } = this.props;
    handleGetList({ page, size, ...searchParams, tabType: tabActiveKey });
  };

  render() {
    const {
      total,
      page,
      size,
      tableLoading,
      searchResult = [],
    } = this.props;

    return (
      <CommonTable
        rowKey="id"
        scroll={{ x: "max-content" }}
        columns={this.columns}
        loading={tableLoading}
        dataSource={searchResult}
        total={total}
        page={page}
        size={size}
        getData={this.getData}
      />
    );
  }
}
export default <%= _.upperFirst(pageName) %>Table;
