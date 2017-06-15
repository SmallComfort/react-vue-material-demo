import Vue, {
  observer
} from 'react-vue'

import {
  Component
} from 'react'

import PropTypes from 'prop-types'

import {
  buildComponent,
  platformDirectives
} from 'react-vue-helper'
import _Vue from "../vue.config.js"
export default (render, options, cssModules) => {
  options.directives = Object.assign({}, options.directives, platformDirectives)
  return observer(
    class Avatar extends buildComponent(
      render, options, {
        Component,
        PropTypes,
        Vue: _Vue || Vue,
        cssModules
      }
    ) {}
  )
}