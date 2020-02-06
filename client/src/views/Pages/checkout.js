//where all the checkout procedure lives
//extend react component
/**sub component (useEffect similart to component did mount) fill in data from cookie on load
 1. shipping address form: input validation, on click event, save to cookie, callback to set state change for checkout.js
 2. Delivery method: auto select standard, on click event, save to cookie, callback to set state change for checkout.js
 3. Payment: auto select card-payment, sub-component hide when paypal clicked, input validation, billing address same as shipping, "continue" on click will check card or paypal, save to cookie, callback to set state for chekcout.js
 4. review: place order button, send to square, wait get confirmation from sqaure -> set customer email -> callback to set state change for checkout.js
 5. confirmation: go home button

 6. summary: initial state(delivery: NA), update whenever other states changes from cookie
 */
/*****states
  1. Address successfully entered, continue button clicked -> invoke Delivery Method
  2. Delivery method successfully chosed, continue button clicked -> summary updated & Payment information invoked
  3. payment information successfully updated, continue button clicked -> summary updated & review place order invoked
  4. place order successful -> payment confirmation

  5. "edit" bottons for each section, change state, load corresponding sections
 ***/
/*** research
 1. square: how to send information, get confirmation
 2. encription of payment info
 **/