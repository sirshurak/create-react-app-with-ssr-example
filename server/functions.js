import { load } from "cheerio";

export function getServerPropsFromPackage(requiredPackage, publicPath) {
  const { default: render } = requiredPackage;
  return { render, publicPath };
}

export function serializehtml(htmlTemplate, body, res) {
    htmlTemplate = htmlTemplate.replace(/%PUBLIC_URL%/g, process.env.REACT_APP_PUBLIC_URL ?? '');
    const html = new load(htmlTemplate);

    html('div#root').prepend('afterbegin', body);

    return res.status(200).send(html.html());
}