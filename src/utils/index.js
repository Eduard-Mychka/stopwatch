let clickCount = 0;

export const doubleClick = (cb) => {
  
  let singleClickTimer;
  clickCount += 1;

  if (clickCount === 1) {
    singleClickTimer = setTimeout(() => {
      clickCount = 0
    }, 200);
  } else if (clickCount > 1) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    cb();
  }
} 