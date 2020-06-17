/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

var express = require('express');

// Variables
var PORT = 3000;
var HOST = 'localhost';

// App
var app = express();
app.get('/', (req, res) => {
	res.send(`Hello world from VS Codespaces\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
