let arr = document.querySelectorAll("input");

window.onload = function () {
  let a = 5;
  arr[0].focus();
  arr[0].getc
  arr[0].onkeydown = function () {
    if (arr[0].value.length == a) {
      arr[0].blur();
      arr[1].focus();
    }
  };
  arr[1].onkeydown = function () {
    if (arr[1].value.length == a) {
      arr[1].blur();
      arr[2].focus();
    }
  };
  arr[2].onkeydown = function () {
    if (arr[2].value.length == a) {
      arr[2].blur();
      arr[3].focus();
    }
  };
  arr[3].onkeydown = function () {
    if (arr[3].value.length == a) {
      arr[3].blur();
      arr[4].focus();
    }
  };
  arr[4].onkeydown = function () {
    if (arr[4].value.length == a) {
      arr[4].blur();
    }
  };
};
