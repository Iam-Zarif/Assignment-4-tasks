function centimeterToMeter(centimeterInput) {
  let meter = centimeterInput * 0.01;
  if (meter % 1 !== 0) {
    return meter.toFixed(2);
  } else {
    return meter;
  }
}
console.log(centimeterToMeter(100));
