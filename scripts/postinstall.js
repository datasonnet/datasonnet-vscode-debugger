'use strict';

const dapServerVersion = '2.5.3-SNAPSHOT-jar-with-dependencies';

const download = require('mvn-artifact-download').default;
const fs = require('fs');
const path = require('path');

download('com.datasonnet:datasonnet-mapper:' + dapServerVersion, './jars/', 'https://repo1.maven.org/maven2/')
.then((filename)=>{
	fs.renameSync(filename, path.join('.', 'jars', 'datasonnet-mapper.jar'));
})
.catch( error => {
	console.error(error);
});
