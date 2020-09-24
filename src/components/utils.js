const commandIndentation = '&nbsp;&nbsp;&nbsp;&nbsp;';

export const flattenCommandBlock = (item, offset, acc) => {
  acc.push(`${commandIndentation.repeat(offset)}${item.command}`);
  if (item.block) {
    for (const subitem of item.block) {
      flattenCommandBlock(subitem, offset + 1, acc);
    }
  }
};

export const flattenAlgorithm = (algo) => {
  let commands = [];
  for (const commandBlock of algo) {
    flattenCommandBlock(commandBlock, 0, commands);
  }

  return commands.map((text, index) => ({
    text, id: index + 1,
  }));
};
