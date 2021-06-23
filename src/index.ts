export const pkgAddProp = (
	pkgPath: string,
	{ key, value }: { key: string; value: string }
): void => {
	let pkg = null;

	try {
		pkg = require(pkgPath); // eslint-disable-line global-require
	} catch (error) {
		console.error(`Unable to locate ${pkgPath}`);
		process.exit();
	}

	const fs = require("fs"); // eslint-disable-line global-require

	if (pkg[key] !== undefined) {
		console.log(`Property with key "${key}" is already defined with value : "${value}"`);
		process.exit();
	}

	console.log(`Adding property "${key}": "${value}" to ${pkgPath}`);

	pkg[key] = value;
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
};
