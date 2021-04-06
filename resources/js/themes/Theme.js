import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

const theme = createMuiTheme({
    palette: {
        base: {
            color: '#fcfcfc',
            contrastText: '#222222',
        },
        primary: {
            main: '#FDD000',
            light:'#FDDC4C',
            dark:'#C9A500',
            contrastText: '#222222',
        },
        secondary: {
            main: '#0068B7',
            light:'#3B88C3',
            dark:'#004B85',
            contrastText: '#fcfcfc',
        },
        warning: {
            main: '#FDD000',
            light:'#FDDC4C',
            dark:'#C9A500',
            contrastText: '#222222',
        },
        success: {
            main: '#9FD9F6',
            light:'#BFEAFF',
            dark:'#7EABC2',
            contrastText: '#222222',
        },
        error: {
            main: '#DD4945',
            light:'#E38E8B',
            dark:'#AB3935',
            contrastText: '#fcfcfc',
        },
        text: {
            primary: '#222222',
            secondary: '#999999',
        },
    },
    props: {
        MuiCheckbox: {
            color: 'primary',
        },
        MuiRadio: {
            color: 'primary',
        },
        MuiSwitch: {
            color: 'primary',
        },
    },
    // レスポンシブのブレイクポイント
    'breakpoints': {
        'keys': [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
        ],
        'values': {
            'xs': 360, // スマホ用
            'sm': 768, // タブレット用
            'md': 992, // PC用
            'lg': 1400,
            'xl': 1800,
        },
    },
    // classのstyleを上書き
    overrides: {
        MuiButton: {
            root: {
                // ボタン内アルファベット文字を大文字変換しない
                textTransform: 'none',
            },
        },
    },
});

export default theme;
