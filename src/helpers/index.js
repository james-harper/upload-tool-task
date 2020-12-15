// Files might have duplicate names, but are unlikely to have
// same name and last modified timestamp.
// However, it is possible so in a production app a more unique id would be used
export const makeId = (file) => `${file.name}_${file.lastModified}`;
