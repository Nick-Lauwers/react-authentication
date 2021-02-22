import React from 'react';

import Sidebar from '../Layouts/Sidebar/Sidebar';
import Template from './Template/Template';

import { WEBSITE_A } from '../../constants/routes';

const templates = [
	{id: 1, name: 'Website A', link: {WEBSITE_A}},
	{id: 2, name: 'Website B', link: {WEBSITE_A}},
	{id: 3, name: 'Website C', link: {WEBSITE_A}},
	{id: 4, name: 'Website D', link: {WEBSITE_A}},
];

const Templates = () => {
	const templateList = templates.map((template) =>
    <Template key={template.id} 
             	name={template.name} 
             	link={template.link} />
  );

	return (
		<div className='customer'>
			<Sidebar />

			<div className='content-customer'>
				<h1 className='headline-customer'>Website templates.</h1>

				<p className='paragraph-customer'>
		    	Get started with any of our best-in-class website templates and 
		    	customize it to fit your needs, whether it's contact forms or color 
		    	palettes. Making a beautiful website has never been faster.
		    </p>

		    <div className='row'>
          {templateList}
        </div>
		  </div>
		</div>
	)
};

export default Templates;