/*
外部可以通过 this.ctx.request.foo()
*/
'use strict'

module.exports = {
  foo() {
    // console.log(this);

    return this.header.host
  }
}
