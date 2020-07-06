import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';

import React from 'react';
import {render} from 'react-dom';

import './babel.js';
import './styles/styles.css';
import './styles/less.less';
import './styles/sass.sass';

const post = new Post('Webpack Post Title', WebpackLogo);
// $('pre').addClass('code').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack</h1>
        <hr />
        <div className="logo" />
        <hr />
        <pre />
        <hr />
        <div className="box">
            <h2>Less Box</h2>
        </div>
        <hr/>
        <div className="box1">
            <h2>Sass Box</h2>
        </div>
    </div>
);

render(<App />, document.getElementById('app'));

// console.log('Post to string', post.toString());
// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
