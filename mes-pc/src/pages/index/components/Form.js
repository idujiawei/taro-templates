import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Col, Input } from "antd";
import { CsxMultipleSearch } from "Form";
import { CommonFilter } from "Common";
import { API_GET_PUBLIC_GOODS_CODE } from "api";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import style from "./style/Form.scss";

@connect(
  (state) => ({ ...state.<%= pageName %>, userLoation: state.userLoation }),
  mapDispatchToProps
)
class <%= _.upperFirst(pageName) %>Form extends PureComponent {
  constructor(props) {
    super(props);
  }

  // 改变当前的输入值
  onInputChange(values) {
    const { searchParams, update } = this.props;
    update({ searchParams: { ...searchParams, ...values } });
  }

  // 查询数据
  query = () => {
    const { handleGetList, searchParams, size } = this.props;

    handleGetList({
      ...searchParams,
      page: 1,
      size,
    });
  };

  // 重置
  reset = () => {
    this.props.update({ searchParams: {} });
  };

  render() {
    const { searchParams = {} } = this.props;
    const { productCodeList, productName } = searchParams;

    return (
      <CommonFilter
        hasMoreFilter
        className={style.form}
        onQuery={this.query}
        onReset={this.reset}
      >
        <Col span={8}>
          <CsxMultipleSearch
            dateApi={API_GET_PUBLIC_GOODS_CODE}
            label="商品编码"
            searchParamsKey="productCode"
            selectItem={{
              data: productCodeList,
              key: "code",
              valueKey: ["code", "name"],
            }}
            onChangeSelect={(data) => {
              this.onInputChange({ productCodeList: data });
            }}
          />
        </Col>

        <Col span={8}>
          <div className="commonInput ">
            <label htmlFor="">商品名称：</label>
            <div className="box ">
              <Input
                value={productName}
                placeholder="请输入"
                onChange={(e) => {
                  const {
                    target: { value = "" },
                  } = e;
                  this.onInputChange({ productName: value });
                }}
              />
            </div>
          </div>
        </Col>
      </CommonFilter>
    );
  }
}

export default <%= _.upperFirst(pageName) %>Form;
