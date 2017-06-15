import {
  bindWebStyle as __react__vue__bindStyle,
  mergeProps as __react__vue__mergeProps
} from 'react-vue-helper';
import {
  createElement as __react__vue__createElement,
  Component as __react__vue__Component
} from 'react';
export default function render(vm) {
  return __react__vue__createElement('div', __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
    ref: ref => {
      this.setRootRef(ref);
      this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
    },
    className: (' ' + (this.props.className || '')).trim(),
    style: __react__vue__bindStyle(undefined, undefined, Object.assign({}, undefined, this.props.style))
  }), __react__vue__createElement(vm.$options.components['MdAvatar'], {
    className: "md-avatar-icon".trim()
  }, __react__vue__createElement(vm.$options.components['MdIcon'], null, "home")), " ", __react__vue__createElement(vm.$options.components['MdAvatar'], {
    className: "md-avatar-icon md-primary".trim()
  }, __react__vue__createElement(vm.$options.components['MdIcon'], null, "folder")), " ", __react__vue__createElement(vm.$options.components['MdAvatar'], {
    className: "md-avatar-icon md-accent".trim()
  }, __react__vue__createElement(vm.$options.components['MdIcon'], null, "favorite")), " ", __react__vue__createElement(vm.$options.components['MdAvatar'], {
    className: "md-avatar-icon md-warn".trim()
  }, __react__vue__createElement(vm.$options.components['MdIcon'], null, "notes")));
}