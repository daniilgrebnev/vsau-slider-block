<?php
// This file is generated. Do not modify it manually.
return array(
	'block-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-slider/block-slider',
		'version' => '0.1.0',
		'title' => 'Слайдер блок',
		'category' => 'text',
		'icon' => 'slides',
		'description' => 'Слайдер с картинкой и описанием',
		'example' => array(
			
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'block-slider-vsau',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
