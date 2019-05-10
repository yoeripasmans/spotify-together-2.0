import PT from 'prop-types';
import styled from 'styled-components';

const Anchor = styled.a.attrs(({ href }) => ({
  target: '_self',
  rel: 'noopener noreferrer',
  href,
}))`
  color: #fff;
  margin-left: 15px;
  text-decoration: none;
`;

Anchor.propTypes = {
  href: PT.string,
};

export default Anchor;
