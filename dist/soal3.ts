function camelCase(s: string): number {
    return s.split('').filter(c => c >= 'A' && c <= 'Z').length + 1;
}

// Contoh Penggunaan
const s = "saveChangesInTheEditor";
console.log(camelCase(s));  // Output: 5
