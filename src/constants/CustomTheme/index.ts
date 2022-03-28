import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		overline1: true;
		overline2: true;
	}
}

interface ExtendedTypographyOptions extends TypographyOptions {
	overline1: CSSProperties;
	overline2: CSSProperties;
}

export const CustomTheme = createTheme({
	typography: {
		fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: '700',
			fontSize: '96px',
			lineHeight: '85px',
			letterSpacing: '-1.5px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		h2: {
			fontWeight: '700',
			fontSize: '60px',
			lineHeight: '90px',
			letterSpacing: '-0.5px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		h3: {
			fontWeight: '700',
			fontSize: '48px',
			lineHeight: '46px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		h4: {
			fontWeight: '700',
			fontSize: '34px',
			lineHeight: '38px',
			letterSpacing: '0.25px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		h5: {
			fontWeight: '700',
			fontSize: '24px',
			lineHeight: '36px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		h6: {
			fontWeight: '700',
			fontSize: '20px',
			lineHeight: '30px',
			letterSpacing: '0.15px',
			textTransform: 'uppercase',
			overflow: 'hidden', // fix for line-height
		},
		subtitle1: {
			fontWeight: '600',
			fontSize: '18px',
			lineHeight: '18px',
			letterSpacing: '0.15px',
		},
		body1: {
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '16px',
			letterSpacing: '0.5px',
		},
		body2: {
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '18px',
			letterSpacing: '0.25px',
		},
		button: {
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '16px',
			letterSpacing: '0.75px',
		},
		caption: {
			fontWeight: '500',
			fontSize: '12px',
			lineHeight: '16px',
			letterSpacing: '0.4px',
		},
		overline1: {
			fontWeight: '400',
			fontSize: '10px',
			lineHeight: '12px',
			letterSpacing: '1.5px',
		},
		overline2: {
			fontWeight: '600',
			fontSize: '8px',
			lineHeight: '8px',
			letterSpacing: '1px',
		},
	} as ExtendedTypographyOptions,
} as ThemeOptions);
