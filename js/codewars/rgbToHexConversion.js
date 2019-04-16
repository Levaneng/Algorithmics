/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
 */

function rgb(r, g, b) {
  return [r, g, b].reduce((a, b) => {
    if (b < 0) {
      return a + "00";
    }
    if (b > 255) {
      return a + "FF";
    }
    let hex = b.toString(16);
    if (hex.length % 2) {
      hex = "0" + hex;
    }
    return a + hex;
  }, "").toUpperCase();
}

console.log(rgb(173, 255, 47));
