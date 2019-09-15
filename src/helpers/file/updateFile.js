const saveFile = require("./saveFile");
const { MAIN_PATH } = require("./configs");
const deleteFile = require("./deleteFile");

const updateFile = async (
  oldFileName,
  oldSubFolderPath = "",
  stream,
  filename,
  subFolderPath = "",
  callback = () => {}
) => {
  let newFileName = await saveFile(stream, filename, subFolderPath);
  if (oldFileName != "defaultImage.jpg")
    deleteFile(oldFileName, oldSubFolderPath, callback);

  return newFileName;
};

module.exports = updateFile;
