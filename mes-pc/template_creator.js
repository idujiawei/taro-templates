const fs = require("fs");
const { resolve } = require("path");
const _ = require("lodash");

function createWhenTs(params) {
  return params.typescript ? true : false;
}

const getTemplateFiles = (basePath, dirPath) => {
  const files = fs.readdirSync(basePath + dirPath);

  return files.reduce((prev, item) => {
    if (fs.statSync(basePath + dirPath + "/" + item).isFile()) {
      return [...prev, `${dirPath + "/" + item}`];
    }

    const subFiles = getTemplateFiles(basePath + "/", dirPath + "/" + item);

    return [...prev, ...subFiles];
  }, []);
};

const path = resolve(__dirname, ".", "src/pages");
const files = getTemplateFiles(path + "/", "");

const createHandler = (basePath) => {
  return files.reduce((prev, item) => {
    return {
      ...prev,
      [`${basePath}${item}`]: ({ pageName }) => {
        const dirPath = _.replace(item, /^\/(\w*)\/(.*)\.\w+$/, "$1");
        const filePath = _.replace(item, `/${dirPath}/`, `/${pageName}/`);

        return { setPageName: `/src_admin/page${filePath}` };
      },
    };
  }, {});
};

const fileObj = createHandler("/src/pages");

const handler = {
  "/global.d.ts": createWhenTs,
  "/tsconfig.json": createWhenTs,
  ...fileObj,
  "/src/api/api.js"({ pageName }) {
    return { setPageName: `/api/${pageName}.js` };
  },
};

const basePageFiles = [
  ...files.map((item) => `/src/pages${item}`),
  "/src/api/api.js",
];

module.exports = {
  handler,
  basePageFiles,
  platforms: ["react", "nerv"],
};
