import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button } from "antd";;
import { CommonTool } from "Common";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";

@connect(
  (state) => ({ ...state.<%= pageName %>, userLoation: state.userLoation }),
  mapDispatchToProps
)
class <%= _.upperFirst(pageName) %>Tool extends PureComponent {
  // 事件
  handleClick = () => {};

  render() {
    const { exportLoading } = this.props;

    return (
      <CommonTool>
        <Button
          type="primary"
          icon="download"
          className="common-tool-btn"
          onClick={this.handleClick}
          loading={exportLoading}
        >
          导出
        </Button>
      </CommonTool>
    );
  }
}

export default <%= _.upperFirst(pageName) %>Tool;
