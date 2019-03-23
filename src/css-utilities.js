export function buildStyle(id, time, distance) {
  let style = `
  .Smarquee.Smarquee--${id} {
    --time: ${time}s;
    --distance: -${distance}px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
  }
  
  .Smarquee--${id} .animate {
    animation-name: marquee;
    animation-duration: var(--time);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: block;
  }
  
  .Smarquee--${id} .animate > span {
    margin-left: 24px;
  }
  
  @keyframes marquee {
    0% {
      transform: translate3d(0px, 0, 0);
    }
    70% {
      transform: translate3d(var(--distance), 0, 0);
    }
    100% {
      transform: translate3d(var(--distance), 0, 0);
    }
  }
  `;
  return style;
}
