import { StyledWebcamTile } from './WebcamTile.styles';

import { Link } from 'react-router-dom';

export const WebcamTile = ({ iframeEl, resortName, resortPlace }) => {

  const getSrcAttribFromHtmlElement = element => {
    let parser = new DOMParser();
    let parsedResult = parser.parseFromString(element, 'text/html');
    return parsedResult.documentElement.getElementsByTagName('iframe')[0].getAttribute('src')
  }

  return (
    <StyledWebcamTile
      onClick={() => {
        window.location.href = getSrcAttribFromHtmlElement(iframeEl);
      }}
    >
      <Link to={`/resort/${resortName}`}>
        <p>
          <strong>{resortName}</strong>
        </p>
      </Link>
      <p>{resortPlace}</p>
      <div
        onClick={() => {
          window.location.href = getSrcAttribFromHtmlElement(iframeEl);
        }}
        dangerouslySetInnerHTML={{ __html: iframeEl }}
      ></div>
    </StyledWebcamTile>
  );
};
