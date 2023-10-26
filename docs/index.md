## Introduction
 Visual Studio Code debug adapter for Datasonnet and Jsonnet

## Description

This is the <a href="https://code.visualstudio.com/">Visual Studio Code</a> extension that adds support for debugging <a href="https://datasonnet.com">Datasonnet</a> and <a href="https://jsonnet.org/">Jsonnet</a> scripts.
</p><br/>

This implementation is based on the <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-debug-adapter-apache-camel">Camel VS Code Debugger</a>

<!-- ## How to install

1. You can download **Debug Adapter for Apache Camel** extension from the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=portx.vscode-debug-adapter-datasonnet) and the [Open VSX Registry](https://open-vsx.org/extension/redhat/vscode-debug-adapter-apache-camel).
2. Debug Adapter for Apache Camel can be also installed directly in the [Microsoft VS Code](https://code.visualstudio.com/).

    **Steps**
    - Open your VS Code.
    - In VS Code, select **View > Extensions**.
    - In the search bar, type `Camel Debug`
    - Select the **Debug Adapter for Apache Camel** option and then click `Install`. -->
### Debugging Datasonnet

This extension uses the <a href="https://datasonnet.github.io/datasonnet-mapper/datasonnet/latest/jar-lib.html">Datasonnet Mapper</a> to execute the scripts. You can debug and run Datasonnet and Jsonnet scripts. <a href="">Datasonnet</a> <a href="https://datasonnet.github.io/datasonnet-mapper/datasonnet/latest/dataformats.html">adds supports for different formats like XML, CSV and YAML</a>, provides <a href="https://datasonnet.github.io/datasonnet-mapper/datasonnet/latest/libraries-core.html">libraries supporting extra functionality to what Jsonnet provides, and is used primary as a mapping tool. You can check more example in its <a href="https://datasonnet.github.io/datasonnet-mapper/datasonnet/latest/cookbook.html">cookbook</a>.

To debug a script, just open it on the editor and create a launch configuration. The minimal launch configuration is:

```jsonc
{
  "type": "datasonnet",
  "request": "launch",
  "name": "Datasonnet - JSON",
  "program": "${file}",
  "fileBasename": "${fileBasename}",
}
```

This will run the `program`. If you need to specify a payload, add:

```json
  "payload": "${workspaceFolder}/resources/payload.json",
```

The input content type is inferred from the file extension.

And if you need to specify an output type other than JSON, set the following type to the appropriate MIME type:

```json
  "outputType": "application/xml"
```
  
### Features


- Add/Remove breakpoints
- Inspect variable values on suspended breakpoints
- Stepping

