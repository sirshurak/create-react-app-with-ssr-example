import React from "react";
import { StaticRouter } from "react-router-dom/server";
import * as ReactDOMServer from "react-dom/server";
import Routes from "./routes/routes";
import App from "./App.jsx";

export default function SSR({ url, context }) {
  return ReactDOMServer.renderToString(
      <StaticRouter location={url} context={context}>
        <App Routes={Routes} />
      </StaticRouter>
  );
}
