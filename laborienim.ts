// Combines Prefix and Separator into a formatted string
type PrettySep<Prefix extends string, Separator extends string> = `${Prefix}${Separator}`;

// Extracts string keys from an object type T
type StrKeys<T> = keyof T & string;
