function createWhenTs(params) {
  return params.typescript ? true : false;
}

const handler = {
  "/global.d.ts": createWhenTs,
  "/tsconfig.json": createWhenTs,
  "/src/pages/index/index.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/index.js` };
  },
  "/src/pages/index/components/Table.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/components/Table.js` };
  },
  "/src/pages/index/components/Form.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/components/Form.js` };
  },
  "/src/pages/index/components/Tool.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/components/Tool.js` };
  },
  "/src/pages/index/components/styles/Table.scss"({ pageName }) {
    return {
      setPageName: `/src_admin/page/${pageName}/components/styles/Table.scss`,
    };
  },
  "/src/pages/index/components/styles/Form.scss"({ pageName }) {
    return {
      setPageName: `/src_admin/page/${pageName}/components/styles/Form.scss`,
    };
  },
  "/src/pages/index/components/styles/Tool.scss"({ pageName }) {
    return {
      setPageName: `/src_admin/page/${pageName}/components/styles/Tool.scss`,
    };
  },
  "/src/pages/index/redux/action.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/redux/action.js` };
  },
  "/src/pages/index/redux/actionType.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/redux/actionType.js` };
  },
  "/src/pages/index/redux/mapDispatchToProps.js"({ pageName }) {
    return {
      setPageName: `/src_admin/page/${pageName}/redux/mapDispatchToProps.js`,
    };
  },
  "/src/pages/index/redux/modal.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/redux/modal.js` };
  },
  "/src/pages/index/redux/reducer.js"({ pageName }) {
    return { setPageName: `/src_admin/page/${pageName}/redux/reducer.js` };
  },
  "/src/api/api.js"({ pageName }) {
    return { setPageName: `/api/${pageName}.js` };
  },
};

const basePageFiles = [
  "/src/pages/index/index.js",
  "/src/pages/index/components/Table.js",
  "/src/pages/index/components/Form.js",
  "/src/pages/index/components/Tool.js",
  "/src/pages/index/components/styles/Table.scss",
  "/src/pages/index/components/styles/Form.scss",
  "/src/pages/index/components/styles/Tool.scss",
  "/src/pages/index/redux/action.js",
  "/src/pages/index/redux/actionType.js",
  "/src/pages/index/redux/mapDispatchToProps.js",
  "/src/pages/index/redux/modal.js",
  "/src/pages/index/redux/reducer.js",
  "/src/api/api.js",
];

module.exports = {
  handler,
  basePageFiles,
  platforms: ["react", "nerv"],
};
