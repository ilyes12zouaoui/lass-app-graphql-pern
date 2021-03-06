const { MAIN_PATH } = require("./configs");
const fs = require("fs");
// const path = require("path");

const deleteFileFromProject = async (
  fileName,
  subFolderPath = "",
  callback
) => {
  const path = `${__dirname}/../../../client/public/images/${subFolderPath}/${fileName}`;
  await fs.unlink(
    // path.join(__dirname, "/../client/public/images/", fileName),
    path,
    callback
  );
};

module.exports = deleteFileFromProject;
