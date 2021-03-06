System.config({
	defaultJSExtensions: true,
	transpiler: false,
	paths: {
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*"
	},

	packages: {
		"github:readium/readium-js@0.22.2": {
			"defaultExtension": "js",
			"format": "amd",
			"main": "js/Readium",
			"map": {
				"version.json": "./dev/version.json!text",
				"URIjs": "medialize/URI.js",
				"zip-ext": "gildas-lormeau/zip.js/WebContent/zip-ext",
				"text": "text"
			}
		},
		"github:readium/readium-shared-js@0.22.2": {
			"format": "amd",
			"map": {
				"eventEmitter": "primus/eventemitter3",
				"jquerySizes": "bramstein/jsizes/lib/jquery.sizes",
				"readium_cfi_js": "./build-output/_multiple-bundles/readium-cfi-js",
				"rangy": "timdown/rangy-release",
				"URIjs": "medialize/URI.js",
				"FontLoader": "bramstein/fontloader",
				"cssom": "NV/CSSOM"
			}
		}
	},

	map: {
		"NV/CSSOM": "github:NV/CSSOM@0.3.1",
		"bramstein/fontloader": "github:bramstein/fontloader@1.2.2",
		"bramstein/jsizes": "github:bramstein/jsizes@0.33.0",
		"brix/crypto-js": "github:brix/crypto-js@3.1.6",
		"eventemitter3": "github:primus/eventemitter3@1.1.1",
		"gildas-lormeau/zip.js": "github:gildas-lormeau/zip.js@master",
		"hammer": "github:hammerjs/hammer.js@2.0.6",
		"jquery": "github:components/jquery@2.2.1",
		"medialize/URI.js": "github:medialize/URI.js@1.17.0",
		"readium/readium-js": "github:readium/readium-js@0.22.2",
		"readium/readium-shared-js": "github:readium/readium-shared-js@0.22.2",
		"timdown/rangy-release": "github:timdown/rangy-release@1.3.0",
		"text": "github:systemjs/plugin-text@0.0.4"
	}
});
