/*
 * Copyright 2022 Dirk Rudolph
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function appendChildren (element, children) {
  children && (Array.isArray(children) ? children : [children]).forEach(child => {
    typeof child === 'object'
      ? element.appendChild(child)
      : element.appendChild(document.createTextNode(child))
    });
  return element
}

export function jsx (tag, props) {
  if (tag.constructor === String) {
    const element = appendChildren(document.createElement(tag), props.children)
    delete props.children
    Object.keys(props).forEach(attribute => {
      attribute === 'style'
        ? Object.keys(props[attribute]).forEach(styleAttribute =>
          element.style[styleAttribute] = props[attribute][styleAttribute])
        : element[attribute] = props[attribute]
    });
    return element
  }
  return tag(props)
}
export const jsxs = jsx
export function Fragment (props) {
  return appendChildren(document.createDocumentFragment(), props.children)
}
