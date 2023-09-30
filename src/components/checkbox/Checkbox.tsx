import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme} from "@tailus/themer-checkbox";

const CheckboxUI = () => (
    <div className="flex items-center">
        <Checkbox.Root className={checkboxTheme.root} defaultChecked id="c1">
            <Checkbox.Indicator className={checkboxTheme.indicator}>
                <svg className="w-4 h-4" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_2)">
<g filter="url(#filter0_d_23_2)">
<path d="M6 15.91L10.4241 11.546L19.2713 20.273L34.7547 5L39.1788 9.364L19.2723 29L6 15.91Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_23_2" x="2" y="4" width="41.1788" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_2" result="shape"/>
</filter>
<clipPath id="clip0_23_2">
<rect width="46" height="33" fill="white"/>
</clipPath>
</defs>
</svg>

            </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={checkboxTheme.label} htmlFor="c1">
            Keep me signed in
        </label>
    </div>
);

export default CheckboxUI;
