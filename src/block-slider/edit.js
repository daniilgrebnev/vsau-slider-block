import { MediaUpload, RichText, useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { slides } = attributes;

	const addSlide = () => {
		setAttributes({
			slides: [...slides, { imageUrl: "", description: "" }],
		});
	};

	const updateSlide = (index, key, value) => {
		const updatedSlides = [...slides];
		updatedSlides[index][key] = value;
		setAttributes({ slides: updatedSlides });
	};

	return (
		<div {...useBlockProps({ className: "editor-slider-container" })}>
			{slides.map((slide, index) => (
				<div key={index} className="slide-editor">
					<div className="photo-block">
						<MediaUpload
							onSelect={(media) => updateSlide(index, "imageUrl", media.url)}
							allowedTypes={["image"]}
							render={({ open }) => (
								<Button onClick={open} className="button">
									{slide.imageUrl ? (
										<img src={slide.imageUrl} alt="" />
									) : (
										__("Выбрать фото")
									)}
								</Button>
							)}
						/>
					</div>
					<div className="description-block">
						<RichText
							tagName="div"
							value={slide.description}
							onChange={(value) => updateSlide(index, "description", value)}
							placeholder={__("Введите описание")}
							allowedFormats={[
								"core/bold",
								"core/italic",
								"core/link",
								"core/strikethrough",
								"core/code",
								"core/subscript",
								"core/superscript",
								"core/underline",
								"core/text-color",
								"core/heading",
							]}
						/>
					</div>
				</div>
			))}
			<Button onClick={addSlide} variant="primary">
				{__("+ Слайд")}
			</Button>
		</div>
	);
}
