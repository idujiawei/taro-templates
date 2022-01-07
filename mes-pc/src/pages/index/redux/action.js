import _ from 'lodash';
import { getData, formatQuery } from "util";
import { API } from "api";
import * as actionType from "./actionType";

//同步
export const update = (object) => (dispatch) => {
  dispatch({
    type: actionType.<%= _.replace(_.upperCase(pageName), ' ', '_') %>_UPDATE,
    data: object,
  });
};

const isArrVal = ["productCodeList"];
const formatParams = (params) => formatQuery(params, isArrVal);

// 获取列表
export const handleGetList = (reqData) => (dispatch, getState) => {
  dispatch(update({ tableLoading: true }));

  const params = formatParams(reqData);

  getData({ api: API, data: params })
    .then((data) => {
      // 相应的逻辑判断
      const { page, size, tabType } = reqData;
      const {
        rawRequisition: { updateFlag },
      } = getState();

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
        type: actionType.<%= _.replace(_.upperCase(pageName), ' ', '_') %>_FAIL,
      });
    });
};
