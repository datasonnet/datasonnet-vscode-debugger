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
import { DataSonnetDebugAdapterDescriptorFactory } from './DataSonnetDebugAdapterDescriptorFactory';
import { createTracker } from './dapTracker';

const DEBUG_ADAPTER_ID = 'datasonnet';

export async function activate(context: vscode.ExtensionContext) {
	vscode.debug.registerDebugAdapterTrackerFactory(DEBUG_ADAPTER_ID, {
    createDebugAdapterTracker: (session: vscode.DebugSession): vscode.ProviderResult<vscode.DebugAdapterTracker> => {
			return createTracker();
		},
	});

	// Launches the DAP server
	vscode.debug.registerDebugAdapterDescriptorFactory(DEBUG_ADAPTER_ID, new DataSonnetDebugAdapterDescriptorFactory(context));

	// Provide completion for debugging tasks

	// Tasks

	vscode.commands.registerCommand('datasonnet.debug.current', async function (uri: vscode.Uri) {
		if (uri !== undefined) {
			await vscode.window.showTextDocument(uri);
		}
		const debugConfiguration: vscode.DebugConfiguration = {
			name: 'Debug DataSonnet script',
			type: 'datasonnet',
			request: 'launch',
		};
		// This starts the debugging after creating a task. To start this directly, do it from a launch.json entry. (?)
		await vscode.debug.startDebugging(vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0] : undefined, debugConfiguration);

	});
		
}

export async function deactivate() {
}

