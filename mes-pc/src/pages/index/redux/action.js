import _ from 'lodash';
import { getData, formatQuery } from "util";
import { API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_LIST } from "api";
import * as actionType from "./actionType";

//同步
export const update = (object) => (dispatch) => {
  dispatch({
    type: actionType.<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_UPDATE,
    data: object,
  });
};

const isArrVal = ["productCodeList"];
const formatParams = (params) => formatQuery(params, isArrVal);

// 获取列表
export const handleGetList = (reqData) => dispatch => {
  dispatch(update({ tableLoading: true }));

  const params = formatParams(reqData);

  getData({ api: API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_LIST, data: params })
    .then((data) => {
      // 相应的逻辑判断
      const { page, size } = reqData;

      dispatch(
        update({
          page,
          size,
          tableLoading: false,
          total: _.get(data, ["data", "total"]),
          searchResult: _.get(data, ["data", "data"]) || [],
        })
      );
    })
    .catch(() => {
      dispatch({
        type: actionType.<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_FAIL,
      });
    });
};
