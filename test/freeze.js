'use strict'

/* eslint-env jest */

const _o = require('../src')

@_o.freeze
class Dummy {
  constructor () {
    this.a = 1
    this.b = 2
  }
}

it('works as a decorator', () => {
  const foo = new Dummy()

  expect(() => {
    foo.c = 3
  }).toThrow(TypeError)

  expect(foo.c).toBe(undefined)
})

it('works as a function', () => {
  class Dummy {
    constructor () {
      this.a = 1
      this.b = 2
    }
  }

  const DummyFreezing = _o.freeze(Dummy)

  const foo = new DummyFreezing()

  expect(() => {
    foo.c = 3
  }).toThrow(TypeError)

  expect(foo.c).toBe(undefined)
})

it('keep `instanceof` value', () => {
  const foo = new Dummy()

  expect(foo instanceof Dummy).toBe(true)
})

it('keep constructor property', () => {
  const foo = new Dummy()

  expect(foo.constructor.name).toBe('Dummy')
})
