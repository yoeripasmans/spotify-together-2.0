import PT from 'prop-types';
import styled from 'styled-components';

const Anchor = styled.a.attrs(({ href }) => ({
  target: '_self',
  rel: 'noopener noreferrer',
  href,
}))`
  color: ${(props) => props.theme.black};
  text-decoration: none;
`;

Anchor.propTypes = {
  href: PT.string,
};

export default Anchor;
