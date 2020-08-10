import React from 'react';

const ImageList = (props) => {
	return (
		<div>
			<ul>
				{
					props.images.map(image => (
						<li>
							<img src={image.urls.thumb} alt={image.alt_description} />
						</li>
					))
				}
			</ul>
		</div>
	)
}
export default ImageList;