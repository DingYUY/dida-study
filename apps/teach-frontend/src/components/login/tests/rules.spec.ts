import { describe, expect, it } from 'vitest'
import { createConfirmPasswordRule, createPasswordRule, createUsernameRule } from '../rules'

describe('rules', () => {
  it('create name rule', () => {
    expect(createUsernameRule()).toMatchSnapshot()
  })
  it('create password rule', () => {
    expect(createPasswordRule()).toMatchSnapshot()
  })
  it('create confirm password rule', () => {
    expect(createConfirmPasswordRule({ password: '' })).toMatchSnapshot()
  })
})
