import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Feature.css';

const Feature = (props) => (
  <div className='feature col-md-4'>
    <table>
      <thead>
        <tr>
          <th>
            <div className='icon-border-feature'>
              <FontAwesomeIcon icon={props.icon} className='icon-feature' />
            </div>
          </th>

          <th className='title-feature'>{props.title}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td className='description-feature'>{props.description}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Feature;