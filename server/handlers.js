import { readFileSync, existsSync, lstatSync } from "fs";
import { resolve } from "path";
import { serializehtml } from "./functions";

export const staticFiles = (req, res, next) => {
  const notPermittedFiles = [
    resolve(req.publicPath, "./index.html"),
  ];
  const file = resolve(req.publicPath, `.${req.path}`);
  if (
    existsSync(file) &&
    !notPermittedFiles.includes(file) &&
    lstatSync(file).isFile()
  )
    return res.sendFile(file);
  return next();
};

// Server side rendering
export const serverRenderer = async (req, res, next) => {
  const pathIndexHtml = resolve(req.publicPath, "./index.html");
  const dataFile = readFileSync(pathIndexHtml, "utf8");
  if (dataFile) {
    try {
      const context = {};
      const rendered = req.render({
        url: req.url,
        context
      });

      return serializehtml(dataFile, rendered, res);
    } catch (error) {
      console.error(error);
      return res.status(500).send("An error occurred");
    }
  } else {
    console.error(
      `Can't load file ${pathIndexHtml}. Maybe missing "public path"?`
    );
  }
  return next();
};
