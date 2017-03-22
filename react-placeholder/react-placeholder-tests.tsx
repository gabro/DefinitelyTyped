import ReactDOM = require('react-dom');
import React = require('react');
import ReactPlaceholder from 'react-placeholder';
import { RectShape, RoundShape, MediaBlock, TextBlock, TextRow } from 'react-placeholder/lib/placeholders';

ReactDOM.render(
  <ReactPlaceholder type='media' rows={7} ready={false}>
    <div>Example</div>
  </ReactPlaceholder>,
  document.body
);

ReactDOM.render(
  <div>
    <RectShape color='blue' style={{ width: 30, height: 80 }} />,
    <RoundShape color='red' className='foo' />
    <MediaBlock rows={7} color='yellow' style={{ height: 20 }} />
    <TextBlock rows={7} color='yellow' style={{ height: 20 }} />
    <TextRow invisible color='blue' />
  </div>,
  document.body
)