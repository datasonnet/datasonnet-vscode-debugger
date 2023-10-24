'use strict';

import * as vscode from 'vscode';

import { DebugProtocol } from '@vscode/debugprotocol';

export function createTracker(): vscode.DebugAdapterTracker {
	return {

		onWillReceiveMessage: (m: DebugProtocol.ProtocolMessage) => {
			// VS Code -> Debug Adapter
			console.log(m);
		},

		onDidSendMessage: (m: DebugProtocol.ProtocolMessage) => {
			// Debug Adapter -> VS Code
			console.log(m);
		},

		onWillStartSession() {
			console.log('onWillStartSession');
		},

		onWillStopSession() {
			console.log('onWillStopSession');
		},

		onError(error: Error) {
			console.log(error);
		},

		onExit(code: number | undefined, signal: string | undefined) {
			console.log(code);
			console.log(signal);
		},

	}
}
