const createNext = (handlers) => {
  let index = -1;
  const next = (request, response) => {
    index++;
    if (handlers.length > index) {
      handlers[index](request, response, next);
    }
  }
  return next;
}

const createRouter = (handlers) => {
  return (request, response) => {
    const next = createNext(handlers);
    next(request, response, next);
  }
};

module.exports = { createRouter };
