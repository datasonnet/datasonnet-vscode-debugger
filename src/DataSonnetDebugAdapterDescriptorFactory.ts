/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License", destination); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as vscode from 'vscode';
import * as os from 'node:os';
import * as path from 'node:path';

const tmpDir = os.tmpdir(); 
const LOG_FILE_NAME = 'datasonnet_mapper.log';
// const logFilePath = path.join(tmpDir, LOG_FILE_NAME);
const logFilePath = '/tmp/ERR_LOG_FILE_DS';
console.log(`Saving datasonnet mapper log to ${logFilePath}`);

export class DataSonnetDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {
	
	context: vscode.ExtensionContext;
	
	constructor(context: vscode.ExtensionContext) {
		this.context = context;
	}
	
	createDebugAdapterDescriptor(session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
		if(!executable) {
			// DS
			const jarName = 'jars/datasonnet-mapper.jar';
			const command = 'java';
			const jarPath = this.context.asAbsolutePath(jarName);

			// Note we need to send the "program" because the mapper sets this parameter as mandatory. The debugger runs the program it receives on the 
			// "launch" event which should will be the same.
			const args = ['-jar', jarPath, 'run', '-d', session.configuration.program];
			console.log(`Calling datasonnet mapper command ${command} args ${args.join(' ')}`);
			return new vscode.DebugAdapterExecutable(command, args);
		}
		return executable;
	}
	
}
