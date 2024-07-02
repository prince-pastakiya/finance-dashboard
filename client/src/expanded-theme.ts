// eslint-disable-next-line
import { Palette, PalelleColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	interface PalelleColor {
		[key: number]: string;
	}

	interface Palette {
		tertiary: PalelleColor;
	}
}
