
/**
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_SAVE      保存
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_UPDATE    更新
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_DELETE    删除
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_EXPORT    导出
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_IMPORT    导入
 * API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_GET_INFO  获取详情
 */


export default {
  // 列表
  API_<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_LIST: {
    url: "list",
    config: {
      method: "post",
      host: "CSXFACTORY",
    },
  },
};
