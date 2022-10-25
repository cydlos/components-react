import React from 'react'

export const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title
    .querySelector('meta[name="description"]')
    .setAttribute('content', props.description);
  }, [props])
  return <></>;
};

export default Head
