'use strict'

const express = require('express');
const app = express();
const path = require('path');

app.get('*', express.static(path.join(__dirname, 'app')));

app.listen(8808, () => console.log('DWJBDNETC is running on 8808'));
