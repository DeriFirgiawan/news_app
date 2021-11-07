exports.convertUpperCaseName = (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase());
