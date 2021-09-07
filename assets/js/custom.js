const options = {
  range: {
    min: 0,
    max: 100000,
    step: 1,
  },
  grid: {
    minTicksStep: 1,
    marksStep: 5,
  },
  theme: 'dark',
};
const mileageOptions = {
  range: {
    min: 0,
    max: 150000,
    step: 1,
  },
  grid: {
    minTicksStep: 1,
    marksStep: 5,
  },
  theme: 'dark',
};
const yearOptions = {
  range: {
    min: 0,
    max: 10,
    step: 1,
  },
  grid: {
    minTicksStep: 1,
    marksStep: 5,
  },
  theme: 'dark',
};
const paymentOption = {
  range: {
    min: 0,
    max: 5000,
    step: 1,
  },
  grid: {
    minTicksStep: 1,
    marksStep: 5,
  },
  theme: 'dark',
};
const grossOption = {
  range: {
    min: 0,
    max: 10000,
    step: 1,
  },
  grid: {
    minTicksStep: 1,
    marksStep: 5,
  },
  theme: 'dark',
};
$('.basic').alRangeSlider({
  ...options,
  onChange: (state) => {
    const rangeValue = '$' + formatNumber(state.currentValue[1]) + '.00';
    $('#amount').val(rangeValue);
  },
  onInit: (state) => {
    $('#amount').val('');
  },
});
$('.currentPayment').alRangeSlider({
  ...paymentOption,
  onChange: (state) => {
    const rangeValue = '$' + formatNumber(state.currentValue[1]) + '.00';
    $('#amount').val(rangeValue);
  },
  onInit: (state) => {
    $('#amount').val('');
  },
});
$('.grossPayment').alRangeSlider({
  ...grossOption,
  onChange: (state) => {
    const rangeValue = '$' + formatNumber(state.currentValue[1]) + '.00';
    $('#amount').val(rangeValue);
  },
  onInit: (state) => {
    $('#amount').val('');
  },
});
$('.progressYear').alRangeSlider({
  ...yearOptions,
  onChange: (state) => {
    const rangeValue = formatNumber(state.currentValue[1]) + ' - Year';
    $('#year').val(rangeValue);
  },
  onInit: (state) => {
    $('#year').val('');
  },
});

$('.progressMileage').alRangeSlider({
  ...mileageOptions,
  onChange: (state) => {
    const rangeValue = formatNumber(state.currentValue[1]) + ' - Miles';
    $('#mileage').val(rangeValue);
  },
  onInit: (state) => {
    $('#mileage').val('');
  },
});



// Jquery Dependency
$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), 'blur');
  },
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === '') {
    return;
  }

  // original length
  var original_len = input_val.length;

  // initial caret position
  var caret_pos = input.prop('selectionStart');

  // check for decimal
  if (input_val.indexOf('.') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf('.');

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === 'blur') {
      right_side += '00';
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = '$' + left_side + '.' + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = '$' + input_val;

    // final formatting
    if (blur === 'blur') {
      input_val += '.00';
    }
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

// Jquery Mileage formatter Dependency
$("input[data-type='mileage']").on({
  keyup: function () {
    formatMileage($(this));
  },
  blur: function () {
    formatMileage($(this), 'blur');
  },
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatMileage(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === '') {
    return;
  }

  // original length
  var original_len = input_val.length;

  // initial caret position
  var caret_pos = input.prop('selectionStart');

  // check for decimal
  if (input_val.indexOf('Miles3') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf('');

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === 'blur') {
      right_side += ' Miles6';
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = 'Miles7' + left_side + 'Miles2' + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = '' + input_val;

    // final formatting
    if (blur === 'blur') {
      input_val += ' - Miles';
    }
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}



// Jquery Year formatter Dependency
$("input[data-type='progressYear']").on({
  keyup: function () {
    formatYear($(this));
  },
  blur: function () {
    formatYear($(this), 'blur');
  },
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatYear(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === 'aa') {
    return;
  }

  // original length
  var original_len = input_val.length;

  // initial caret position
  var caret_pos = input.prop('selectionStart');

  // check for decimal
  if (input_val.indexOf('Year') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf('ww');

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === 'blur') {
      right_side += ' rr';
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = '' + left_side + '' + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = '' + input_val;

    // final formatting
    if (blur === 'blur') {
      input_val += ' - Year';
    }
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}
