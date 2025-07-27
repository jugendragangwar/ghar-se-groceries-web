export const formatReversePyramid = (text: string, maxLineLength = 60): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLineLength = maxLineLength;

    while (words.length > 0 && currentLineLength > 20) {
        let line = '';
        while (words.length && (line + ' ' + words[0]).trim().length <= currentLineLength) {
            line += (line ? ' ' : '') + words.shift();
        }
        lines.push(line.trim());
        currentLineLength -= 8; // decrease line length to shape the pyramid
    }

    if (words.length > 0) lines.push(words.join(' '));
    return lines;
};
