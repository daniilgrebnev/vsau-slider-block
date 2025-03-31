import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { slides } = attributes;

	return (
		<div {...useBlockProps.save()} className="custom-slider-block">
			{slides.map((slide, index) => (
				<div key={index} className="slide-block">
					<div className="img">
						{slide.imageUrl && <img src={slide.imageUrl} alt="" />}
					</div>
					<RichText.Content
						tagName="div"
						className="slide-content"
						value={slide.description}
					/>
				</div>
			))}
		</div>
	);
}
