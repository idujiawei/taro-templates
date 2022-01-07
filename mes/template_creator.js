function createWhenTs(params) {
  return params.typescript ? true : false;
}

const handler = {
  "/global.d.ts": createWhenTs,
  "/tsconfig.json": createWhenTs,
  "/src/pages/index/index.jsx"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.jsx` };
  },
  "/src/pages/index/index.css"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.css` };
  },
  "/src/pages/index/index.config.js"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/index.config.js` };
  },
  "/src/pages/index/model.js"({ pageName }) {
    return { setPageName: `/src/pages/${pageName}/model.js` };
  },
};

const basePageFiles = [
  "/src/pages/index/index.jsx",
  "/src/pages/index/index.css",
  "/src/pages/index/index.config.js",
  "/src/pages/index/model.js",
];

module.exports = {
  handler,
  basePageFiles,
  platforms: ["react", "nerv"],
};
