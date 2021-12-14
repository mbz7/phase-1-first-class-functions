function receivesAFunction(callBack) {
  callBack();
}

const returnsANamedFunction = () => {
  return returnsANamedFunction;
};

const returnsAnAnonymousFunction = function () {
  return function () {};
};
