/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <value>
    <document>
      <paragraph>one</paragraph>
      <paragraph>
        <anchor />two<focus />
        <inline type="inline_type" />
        <inline type="inline_type" />
      </paragraph>
      <paragraph>three</paragraph>
      <paragraph>four</paragraph>
    </document>
  </value>
)

export default function({ document, selection }) {
  return document.getNextBlock(selection.end.path)
}

export const output = <paragraph>three</paragraph>
