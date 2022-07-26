const paddingHorizontal = 25;
const defaultWidth = 1230;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const mq = {
  maxMobile: `@media screen and (max-width: ${Rem(480)})`,
  minTablet: `@media screen and (min-width: ${Rem(481)})`,
  maxTablet: `@media screen and (max-width: ${Rem(768)})`,
  minXsmall: `@media screen and (min-width: ${Rem(769)})`,
  maxXsmall: `@media screen and (max-width: ${Rem(1024)})`,
  minSmall: `@media screen and (min-width: ${Rem(1025)})`,
  maxSmall: `@media screen and (max-width: ${Rem(1280)})`,
  minLarge: `@media screen and (min-width: ${Rem(1281)})`,
};

export const colors = {
  black: '#000',
  white: '#FFF',
  default: '#5A433D',
  accent: '#1EBBEF',
  primary: 'rgba(90, 67, 61, 0.7)',
  important: '#222',
  background: '#F2F2F2',
};

export const ar = {
  support: `@supports not (aspect-ratio: 1)`,
};

export const mixin = {
  widthSettings: {
    margin: '0 auto',
    paddingRight: Rem(paddingHorizontal),
    paddingLeft: Rem(paddingHorizontal),
    width: '100%',
    maxWidth: Rem(totalWidth),
  },
  col: {
    display: 'block',
    flex: '1 0 0%',
    width: '100%',
    maxWidth: '100%',
  },
  colAuto: {
    flex: '0 0 auto',
    width: 'auto',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clearfix: {
    '&::after': {
      display: 'block',
      clear: 'both',
      content: '""',
    },
  },
  screenReaderOnly: {
    position: 'absolute',
    overflow: 'hidden',
    margin: 0,
    width: '1px',
    height: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)',
  },
  visuallyHiddenFocuable: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 20,
    margin: 0,
    width: 'auto',
    height: 'auto',
    clip: 'auto',
  },
  imageRendering: {
    imageRendering: '-webkit-optimize-contrast',
    backfaceVisibility: 'hidden',
  },
};

export const Clamp = (clamp, height, lineheight) => (`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
  max-height: ${height / 16}rem;
  line-height: ${lineheight};
`);

export function Rem(px) {
  const result = px / 16;
  return `${result}rem`;
};

export function Em(px) {
  const result = px / 16;
  return `${result}em`;
};

export function Vw(px, width) {
  const result = px * 100 / width;
  return `${result}vw`;
}
