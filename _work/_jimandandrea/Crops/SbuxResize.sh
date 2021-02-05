#!/bin/bash

declare -a outputs=(
	[2048]=2048
	[1024]=1024
	[512]=512
	[256]=256
	[128]=128
)

bold=$(tput bold)
normal=$(tput sgr0)

for images in *
do

if [[ $images != *.sh ]];
	then

	echo "\n${bold}${images}${normal}\n"

	for i in "${!outputs[@]}"

		do
		size=$i
		suffix=${outputs[$i]}
		filename=${images%.*}'_'${suffix}'.jpg'

		if [[ "$suffix" -ge 1440 ]]; then
			quality="40"
		elif [[ "$suffix" -ge 680 ]]; then
			quality="65"
		elif [[ "$suffix" -ge 305  ]]; then
			quality="75"
		else
			quality="90"
		fi

		echo 'Saving' ${filename}

		convert ${images} -filter Triangle -define filter:support=2 -thumbnail ${size} -strip -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality ${quality} -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB ../Exports/${filename}
	done
fi
done