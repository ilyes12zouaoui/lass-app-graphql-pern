const fs = require("fs");
const { MAIN_PATH } = require("./configs");
const generateUniqueId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

module.exports = (stream, fileName, subFolderPath = "") => {
  let newFileName = `${generateUniqueId()}${fileName.substr(
    fileName.lastIndexOf(".")
  )}`;
  const path = `${MAIN_PATH}/${subFolderPath}/${newFileName}`;
  return new Promise((resolve, reject) =>
    stream
      .on("error", error => {
        if (stream.truncated)
          // Delete the truncated file.
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", error => reject(error))
      .on("finish", () => {
        resolve(newFileName);
      })
  );
};
